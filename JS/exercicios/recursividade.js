function recursiva(maximo)
{   
    if (maximo > 10) return;
    maximo++;
    console.log(maximo);
    recursiva(maximo);
}

recursiva(1)