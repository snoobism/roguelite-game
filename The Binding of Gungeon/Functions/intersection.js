function intersection(x1,y1,w1,h1,x2,y2,w2,h2)
{
    w2=w2+x2;
    w1=w1+x1;
    
    if(x2>w1 || x1>w2)
        {
            return false;
        }
    
    h2=h2+y2;
    h1=h1+y1;
    
    if(y2>h1 || y1>h2)
        {
            return false;
        }
    return true;
    
    
}