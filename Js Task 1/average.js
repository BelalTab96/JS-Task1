var num1 = document.getElementById("num1"),
    num2 = document.getElementById("num2"),
    num3 = document.getElementById("num3"),
    num4 = document.getElementById("num4"),
    num5 = document.getElementById("num5"),
    num6 = document.getElementById("num6"),
    num7 = document.getElementById("num7"),
    num8 = document.getElementById("num8"),
    num9 = document.getElementById("num9"),
    num10 = document.getElementById("num10"),
    averageNum = document.getElementById("averageNum"),
    text = document.getElementById("text");
    result = document.getElementById("result");

    function calcAverage(){
        var average = (parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value) + parseInt(num4.value) + parseInt(num5.value) + parseInt(num6.value) + parseInt(num7.value) + parseInt(num8.value) + parseInt(num9.value) + parseInt(num10.value))/10
        result.innerHTML = average;
        text.style.visibility = "visible";
        result.style.visibility = "visible";
    }

    function lightDark(){
        var lightDarkIcon = document.getElementById("light-dark"),
            calc = document.getElementById("calculator");
    
        if(lightDarkIcon.classList.contains("fa-moon")){
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";

            num1.style.backgroundColor = "black";
            num1.style.border = "1px solid white";
            num1.style.borderRadius = "5px";
            num1.style.color = "white";

            num2.style.backgroundColor = "black";
            num2.style.border = "1px solid white";
            num2.style.borderRadius = "5px";
            num2.style.color = "white";

            num3.style.backgroundColor = "black";
            num3.style.border = "1px solid white";
            num3.style.borderRadius = "5px";
            num3.style.color = "white";

            num4.style.backgroundColor = "black";
            num4.style.border = "1px solid white";
            num4.style.borderRadius = "5px";
            num4.style.color = "white";

            num5.style.backgroundColor = "black";
            num5.style.border = "1px solid white";
            num5.style.borderRadius = "5px";
            num5.style.color = "white";

            num6.style.backgroundColor = "black";
            num6.style.border = "1px solid white";
            num6.style.borderRadius = "5px";
            num6.style.color = "white";

            num7.style.backgroundColor = "black";
            num7.style.border = "1px solid white";
            num7.style.borderRadius = "5px";
            num7.style.color = "white";

            num8.style.backgroundColor = "black";
            num8.style.border = "1px solid white";
            num8.style.borderRadius = "5px";
            num8.style.color = "white";

            num9.style.backgroundColor = "black";
            num9.style.border = "1px solid white";
            num9.style.borderRadius = "5px";
            num9.style.color = "white";

            num10.style.backgroundColor = "black";
            num10.style.border = "1px solid white";
            num10.style.borderRadius = "5px";
            num10.style.color = "white";

            averageNum.style.backgroundColor = "white"
            averageNum.style.color = "black"

            lightDarkIcon.classList.remove("fa-moon");
            lightDarkIcon.classList.add("fa-sun");
        }else{
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";

            num1.style.backgroundColor = "white";
            num1.style.border = "1px solid black";
            num1.style.borderRadius = "5px";
            num1.style.color = "black";

            num2.style.backgroundColor = "white";
            num2.style.border = "1px solid black";
            num2.style.borderRadius = "5px";
            num2.style.color = "black";

            num3.style.backgroundColor = "white";
            num3.style.border = "1px solid black";
            num3.style.borderRadius = "5px";
            num3.style.color = "black";

            num4.style.backgroundColor = "white";
            num4.style.border = "1px solid black";
            num4.style.borderRadius = "5px";
            num4.style.color = "black";

            num5.style.backgroundColor = "white";
            num5.style.border = "1px solid black";
            num5.style.borderRadius = "5px";
            num5.style.color = "black";

            num6.style.backgroundColor = "white";
            num6.style.border = "1px solid black";
            num6.style.borderRadius = "5px";
            num6.style.color = "black";

            num7.style.backgroundColor = "white";
            num7.style.border = "1px solid black";
            num7.style.borderRadius = "5px";
            num7.style.color = "black";

            num8.style.backgroundColor = "white";
            num8.style.border = "1px solid black";
            num8.style.borderRadius = "5px";
            num8.style.color = "black";

            num9.style.backgroundColor = "white";
            num9.style.border = "1px solid black";
            num9.style.borderRadius = "5px";
            num9.style.color = "black";

            num10.style.backgroundColor = "white";
            num10.style.border = "1px solid black";
            num10.style.borderRadius = "5px";
            num10.style.color = "black";

            averageNum.style.backgroundColor = "black"
            averageNum.style.color = "white"

            lightDarkIcon.classList.remove("fa-sun");
            lightDarkIcon.classList.add("fa-moon");
        }
    }