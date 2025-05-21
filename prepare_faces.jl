# This file prepares the arrays needed for faces (eg. neutral faces, happy faces, etc)
# It exports a .json file with the shuffled array
# It also actually transfers the final array images from the all_CFD_faces dir to the local stimuli dir
using DataFrames
using Test
using JSON

path_to_json = "public/stimuli/cfd_arrays_happy_neutral.json"

#List all the files in the all_CFD_faces directory
files = filter(x -> endswith(x, ".jpg"), readdir("all_CFD_faces"))

#convert files vector to a dataframe
df = DataFrame(filesNames=files)

df = transform(df, :filesNames => ByRow(filename ->
    filename |>
    x -> replace(x, ".jpg" => "") |>
         x -> split(x, "-") |>
              parts -> (
        parts[3],  # id
        parts[4],  # image_number
        parts[5],  # expression
        startswith(parts[2], "W") ? "White" :
        startswith(parts[2], "A") ? "African" :
        startswith(parts[2], "B") ? "Black" :
        startswith(parts[2], "H") ? "Hispanic" :
        startswith(parts[2], "AS") ? "Asian" : "Unknown",
        endswith(parts[2], "F") ? "Female" : "Male"
    )
) => [:id, :image_number, :expression, :race, :gender])
size(df)

# count the occurence of ids
# this will give us a sense of how often people appear
faceCounts = groupby(df, [:id, :race, :gender]) |> x -> combine(x, nrow)

onceAppear = faceCounts |>
             x -> subset(x, :nrow => x -> x .== 1)

# Get the neutral faces from the faces that appear only once
neutralFaces = df |>
               x -> subset(x, :id => ByRow(in(onceAppear.id)), :expression => ByRow(==("N")))

# Total neutral faces
size(neutralFaces)

# Now let's get the happy faces (closed face)
# I'm not doing happy open and closed as it seems like the same people
# have both their photos taken for open and closed
happyFaces = df |>
             x -> subset(x, :expression => ByRow(contains("HC")), :id => ByRow(!in(neutralFaces.id)))

# total happy faces
size(happyFaces)

#write json with arrays for happy and neutral faces
open(path_to_json, "w") do io
    JSON.print(io, Dict("happy_faces" => happyFaces.filesNames, "neutral_faces" => neutralFaces.filesNames))
end

#let's check there is no overlap between happy and neutral faces
@testset "Faces arrays exists and differ" begin
    @test length(happyFaces.id) > 0
    @test length(neutralFaces.id) > 0
    @test in.(happyFaces.id, Ref(neutralFaces.id)) |> x -> sum(x) == 0
end

# now let's copy these faces from all_CFD_faces dir to stimuli
src_dir = "all_CFD_faces"
dest_dir = "public/stimuli/cfd"

all_files = vcat(happyFaces.filesNames, neutralFaces.filesNames)

for name in all_files
    cp(joinpath(src_dir, name), joinpath(dest_dir, name); force=true)
end
