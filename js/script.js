// нажатие на кнопку
var start = document.getElementById ('start');
var pause = document.getElementById ('pause')
var stop = document.getElementById ('stop');
var text = document.createTextNode ('Start');
var text2 = document.createTextNode ('Continue');
start.appendChild(text);


function timeIdRun() {
	pause.style.display = 'inline-block';
	start.style.display = 'none';
	timeId = setInterval(counter, 1);  // запускаем ф-цию каждую милисекунду
	
	function counter() {
		ms++;
		if (ms < 10) ms = "00" + ms;
		if (ms < 100) ms = "0" +ms;
		if (ms > 999) {
			ms = 0;
			s++;
			if (s < 10) s = "0" + s;
			if (s > 59) {
				s = 0;
				m ++;
				if (m < 10) {
					m = "0" + m;
				}
				if (m > 59) {
					m = 0;
					h++;
					if (h < 10) {
						h = "0" + h;
					}
				}
			}
			document.getElementById('my_timer').innerHTML = h+":"+m+":"+s; // записываем значение в поле
			
		}
		document.getElementById('milliseconds').innerHTML = ms;
	}
}
start.addEventListener ("click", timeIdRun);
pause.addEventListener("click", timeIdPause);
stop.addEventListener("click", timeIdStop);
var timeId;
 
var my_timer = document.getElementById("my_timer"); // ищем элемент с указаным id
var time = my_timer.innerHTML; // записуем в переменную содержимое my_timer
var arr = time.split(":"); // создаём массив из time с разделением по :
var h = arr[0];
var m = arr[1];
var s = arr[2];
var milliseconds = document.getElementById("milliseconds");
var ms = milliseconds.innerHTML;
function timeIdPause() {
	pause.style.display = 'none'; //спрятали кнопку
	start.style.display = 'inline-block'; //показали кнопку	
	start.innerHTML = 'Continue';
	clearInterval(timeId); //остоновили таймер
}
function timeIdStop() {
	pause.style.display = 'none';
	start.style.display = 'inline-block';
	clearInterval(timeId); //остоновили таймер
	s ="0"+ 0;  // сбросили на 0
	m = "0"+ 0;
	h = "0"+ 0;
	ms = "00" + 0;
	document.getElementById('my_timer').innerHTML = h+":"+m+":"+s // записали 0 в поле
	document.getElementById('milliseconds').innerHTML = ms;
	start.innerHTML = 'Start';
}
