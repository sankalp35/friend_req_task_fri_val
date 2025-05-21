#let's check there is no overlap between happy and neutral faces
@testset verbose = true "Faces arrays exists and differ" begin
    @test length(happyFaces.id) > 0
    @test length(neutralFaces.id) > 0
    @test in.(happyFaces.id, Ref(neutralFaces.id)) |> x -> sum(x) == 0
end
