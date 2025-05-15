
nfaces = 500;

b = randperm(nfaces);


for i = 1:20:nfaces
    index = b(i:i+19);
    jsonencode(index)
end
