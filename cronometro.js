var hor = 00
var min = 00
var seg = 00
var cen = 00
var tempo

function iniciar (){
   tempo= setInterval (contagem ,10);
}

function pausar (){
    clearInterval (tempo)
}

function zerar() {
    clearInterval (tempo)
    hor=0
    min=0
    seg=0
    cen=0
    document.getElementById('segundos').innerText='00'
    document.getElementById('minutos').innerText='00'
    document.getElementById('horas').innerText='00'
    document.getElementById('centi').innerText='00'
}
   

function contagem (){
    cen++
    if (cen==100) {
        cen=00
        seg++
        document.getElementById('segundos').innerText=seg
    }
        if(seg==60) {
            seg=00
            min++
            document.getElementById('minutos').innerText=min
    }
            if (min==60) {
                min=00
                hor++
                document.getElementById('horas').innerText=hor
            }
    document.getElementById('centi').innerText=cen
}

