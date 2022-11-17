array1=['pen','paper','book','bottle']
randomNo = Math.floor((Math.random() *array1.length)+1)
Element_of_array = array1[randomNo]
console.log(Element_of_array);
sketch = Element_of_array
document.getElementById("desenho").innerHTML = sketch;

timerCounter=0;
timerCheck = String = " ";
drawSketch = String = " ";
answerHolder = String = " ";
score=0;

