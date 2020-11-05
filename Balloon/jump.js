const grid = document.querySelector(".canvas");
const balloon = document.createElement("div")
const basket = document.createElement("div")
const tree = document.createElement("div")
let cloudLeft = -90
let cloudTop = 30
let cloudArr=[]
let balTop = 0;
let uptimer =0
let downtimer=0
let treeLeft=0
class cloud{
    constructor(top){
        this.speed = Math.random()*1+0.6
        this.cloudLeft1 = Math.random()*100
        this.cloudTop1 = top
        this.visual = document.createElement("div")
    }
}
function createTree(){
    tree.classList.add("tree")
    grid.appendChild(tree)

}
function createCloud(){
    for (i=0;i<5;i++){
    let newCloud = new cloud(cloudTop)
    cloudV = newCloud.visual
    cloudArr.push(newCloud)
    cloudV.style.top = cloudTop+'px'
    cloudV.style.left =newCloud.cloudLeft1 +'%'
    grid.appendChild(newCloud.visual)
    cloudV.classList.add("cloud")
    cloudTop+=150
}}
function moveClouds(){
    cloudArr.forEach(cloudel=>{
        // console.log(cloudel.cloudLeft1)
        if(cloudel.cloudLeft1<100){
        cloudel.visual.style.left = cloudel.cloudLeft1 +'%'
        cloudel.cloudLeft1 +=cloudel.speed}
        else{
            cloudel.cloudLeft1 = -5
        }
    })
    
    }

function createBalloon(){
    balloon.classList.add("balloon")
    basket.classList.add("basket")
    balloon.appendChild(basket)
    grid.appendChild(balloon)
}
function moveTree(){
if(treeLeft<100){
treeLeft+=1;
console.log(treeLeft)
tree.style.left = treeLeft+'%';
}
else{treeLeft=0}
}
function moveUp(){
    if(balTop>0){
    balTop-=1
    balloon.style.top =balTop +'%'}
}
function moveDown(){
    if(balTop<90){
    balTop+=1
    balloon.style.top =balTop+'%'}
}
function control(e){
    if (e.key==="ArrowUp"){
        clearInterval(downtimer)
        clearInterval(uptimer)
        console.log("PressedUp")
        uptimer = setInterval(moveUp,30)
    }
    if (e.key==="ArrowDown"){
        clearInterval(uptimer)
        clearInterval(downtimer)
        console.log("PressedDown")
        downtimer = setInterval(moveDown,30)
    }
}
function control1(e){
    if (e.key==="ArrowUp"){
        clearInterval(downtimer)
        clearInterval(uptimer)
        
    }
    if (e.key==="ArrowDown"){
        clearInterval(uptimer)
        clearInterval(downtimer)
       
    }
}
    
function start(){
    createCloud()
    createBalloon()
    createTree()
    setInterval(moveClouds,30)
    setInterval(moveTree,30)
    document.addEventListener('keydown',control)
    document.addEventListener('keyup',control1)
    
}
start()