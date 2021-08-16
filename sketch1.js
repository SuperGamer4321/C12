var weight = [10,27,34,14,18,12,45,20];

function checkWeight(){
//for each elemt n the array weight (if, for , ifelse)
for(var i = 0 ; i < weight.length ;i++ ){
  if (weight[i] <= 20 ){
  console.log(weight[i]);

  }

}


}

function setup() 
{
  checkWeight();
  createCanvas(400,400);
}

function draw() 
{
background(51);

}

