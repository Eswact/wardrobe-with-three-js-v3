var xmlContent = '';
var cubeNodes;
var cubeProps = {
width: 0, height: 0, depth: 0
}

function readXml() {
fetch('cubes.xml').then((response) => {
response.text().then((xml) => {
xmlContent = xml;
let parser = new DOMParser();
let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
let cubes = xmlDOM.querySelectorAll('cube');
cubes.forEach(cubeXmlNode => {
cubeNodes = cubeXmlNode.children;
});
generateCubeProps()
});
});
}
readXml();

function generateCubeProps() {
for (let index = 0; index < cubeNodes.length; index++) {
const element = cubeNodes[index];
console.log(element)
let nodeName = element.getAttribute('name')
switch (nodeName) {
case 'width':
cubeProps.width = parseFloat(element.getAttribute('value'))
break;
case 'height':
cubeProps.height = parseFloat(element.getAttribute('value'))
break;
case 'depth':
cubeProps.depth = parseFloat(element.getAttribute('value'))
break;
default:
break;
}
}

var scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight);
camera.position.set(5, 3.7, -9);

var renderer = new THREE.WebGLRenderer({
antialias: true,
alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var bod = document.querySelector('body')
bod.appendChild(renderer.domElement)

var geometry = new THREE.BoxGeometry(cubeProps.width, cubeProps.height, cubeProps.depth); //alt
var material = new THREE.MeshBasicMaterial({ color: 0xB69E79 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.position.z = 0;
cube.position.x = 0;
cube.position.y = -4.6;
cube.rotation.x = 0;
cube.rotation.y = 0;

var geometry2 = new THREE.BoxGeometry(6.50, 0.25, 1.9); //üst
var material2 = new THREE.MeshBasicMaterial({ color: 0xB69E79 });
var cube2 = new THREE.Mesh(geometry2, material2);
scene.add(cube2);

cube2.position.z = 0;
cube2.position.x = 0;
cube2.position.y = 4.6;
cube2.rotation.x = 0;
cube2.rotation.y = 0;

var geometry10 = new THREE.BoxGeometry(0.12, 9, 1.9); // orta dikey raf
var material10 = new THREE.MeshBasicMaterial({ color: 0xC8A888 });
var cube10 = new THREE.Mesh(geometry10, material10);
scene.add(cube10);

cube10.position.z = 0;
cube10.position.x = 0;
cube10.position.y = 0;
cube10.rotation.x = 0;
cube10.rotation.y = 0;

var geometry28 = new THREE.BoxGeometry(0.12, 3, 1.9); // sağ orta dikey raf
var material28 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube28 = new THREE.Mesh(geometry28, material28);
scene.add(cube28);

cube28.position.z = 0;
cube28.position.x = -1.65;
cube28.position.y = -2.9;
cube28.rotation.x = 0;
cube28.rotation.y = 0;

var geometry17 = new THREE.BoxGeometry(3.17, 0.12, 1.9); // alt yatay raf
var material17 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube17 = new THREE.Mesh(geometry17, material17);
scene.add(cube17);

cube17.position.z = 0;
cube17.position.x = -1.65;
cube17.position.y = -4.4;
cube17.rotation.x = 0;
cube17.rotation.y = 0;

var geometry25 = new THREE.BoxGeometry(3.17, 0.12, 1.9); // orta yatay raf
var material25 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube25 = new THREE.Mesh(geometry25, material25);
scene.add(cube25);

cube25.position.z = 0;
cube25.position.x = -1.65;
cube25.position.y = -2.9;
cube25.rotation.x = 0;
cube25.rotation.y = 0;

var geometry26 = new THREE.BoxGeometry(3.17, 0.12, 1.9); // üst yatay raf
var material26 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube26 = new THREE.Mesh(geometry26, material26);
scene.add(cube26);

cube26.position.z = 0;
cube26.position.x = -1.65;
cube26.position.y = -1.4;
cube26.rotation.x = 0;
cube26.rotation.y = 0;

var geometry27 = new THREE.BoxGeometry(3.17, 0.12, 0.12); // askılık
var material27 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube27 = new THREE.Mesh(geometry27, material27);
scene.add(cube27);

cube27.position.z = -0.37;
cube27.position.x = -1.65;
cube27.position.y = 3.5;
cube27.rotation.x = 0;
cube27.rotation.y = 0;

var geometry30 = new THREE.BoxGeometry(3.17, 0.12, 0.12); // askılık
var material30 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube30 = new THREE.Mesh(geometry30, material30);
scene.add(cube30);

cube30.position.z = -0.37;
cube30.position.x = 1.65;
cube30.position.y = 3.5;
cube30.rotation.x = 0;
cube30.rotation.y = 0;

var geometry9 = new THREE.BoxGeometry(7, 0.50, 2.25); //baza
var material9 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube9 = new THREE.Mesh(geometry9, material9);
scene.add(cube9);

cube9.position.z = -0.075;
cube9.position.x = 0;
cube9.position.y = -4.97;
cube9.rotation.x = 0;
cube9.rotation.y = 0;

var geometry3 = new THREE.BoxGeometry(0.27, 9.50, 1.9); // sol
var material3 = new THREE.MeshBasicMaterial({ color: 0xC8A888 });
var cube3 = new THREE.Mesh(geometry3, material3);
scene.add(cube3);

cube3.position.z = 0;
cube3.position.x = 3.36;
cube3.position.y = 0;
cube3.rotation.x = 0;
cube3.rotation.y = 0;

var geometry4 = new THREE.BoxGeometry(7, 9.45, 0.1); // arka
var material4 = new THREE.MeshBasicMaterial({ color: 0x774D2B });
var cube4 = new THREE.Mesh(geometry4, material4);
scene.add(cube4);

cube4.position.z = 1;
cube4.position.x = 0;
cube4.position.y = 0;
cube4.rotation.x = 0;
cube4.rotation.y = 0;

var geometry5 = new THREE.BoxGeometry(3.5, 9.45, 0.25); // sağ kapı
var material5 = new THREE.MeshBasicMaterial({ color: 0x783C2A });
var cube5 = new THREE.Mesh(geometry5, material5);
scene.add(cube5);

cube5.position.z = -1.08;
cube5.position.x = -1.75;
cube5.position.y = 0;
cube5.rotation.x = 0;
cube5.rotation.y = 0;

globalThis.anim = new TWEEN.Tween(cube5.position);
globalThis.anim.to({ x: -3.7, z: -2.75 }, 1750);
globalThis.animb = new TWEEN.Tween(cube5.position);
globalThis.animb.to({ x: -1.75, z: -1.08 }, 1750);
globalThis.animc = new TWEEN.Tween(cube5.rotation);
globalThis.animc.to({ y: 1.75 }, 1750);
globalThis.animd = new TWEEN.Tween(cube5.rotation);
globalThis.animd.to({ y: 0 }, 1750);

var geometry8 = new THREE.BoxGeometry(3.5, 9.45, 0.25); // sol kapı
var material8 = new THREE.MeshBasicMaterial({ color: 0x783C2A });
var cube8 = new THREE.Mesh(geometry8, material8);
scene.add(cube8);

cube8.position.z = -1.08;
cube8.position.x = 1.75;
cube8.position.y = 0;
cube8.rotation.x = 0;
cube8.rotation.y = 0;

globalThis.lanim = new TWEEN.Tween(cube8.position);
globalThis.lanim.to({ x: 3.7, z: -2.75 }, 1750);
globalThis.lanimb = new TWEEN.Tween(cube8.position);
globalThis.lanimb.to({ x: 1.75, z: -1.08 }, 1750);
globalThis.lanimc = new TWEEN.Tween(cube8.rotation);
globalThis.lanimc.to({ y: -1.75 }, 1750);
globalThis.lanimd = new TWEEN.Tween(cube8.rotation);
globalThis.lanimd.to({ y: 0 }, 1750);

var geometry11 = new THREE.BoxGeometry(0.3, 2.37, 0.2); // sol kapı tutacak
var material11 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube11 = new THREE.Mesh(geometry11, material11);
scene.add(cube11);

cube11.position.z = -1.5;
cube11.position.x = 1.75;
cube11.position.y = 0;
cube11.rotation.x = 0;
cube11.rotation.y = 0;

globalThis.lanim2 = new TWEEN.Tween(cube11.position);
globalThis.lanim2.to({ x: 4.1, z: -2.75 }, 1750);
globalThis.lanimb2 = new TWEEN.Tween(cube11.position);
globalThis.lanimb2.to({ x: 1.75, z: -1.5 }, 1750);
globalThis.lanimc2 = new TWEEN.Tween(cube11.rotation);
globalThis.lanimc2.to({ y: -1.75 }, 1750);
globalThis.lanimd2 = new TWEEN.Tween(cube11.rotation);
globalThis.lanimd2.to({ y: 0 }, 1750);

var geometry21 = new THREE.BoxGeometry(0.17, 0.1, 0.4); // sol kapı tutacak
var material21 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube21 = new THREE.Mesh(geometry21, material21);
scene.add(cube21);

cube21.position.z = -1.25;
cube21.position.x = 1.75;
cube21.position.y = 1;
cube21.rotation.x = 0;
cube21.rotation.y = 0;

globalThis.lanim3 = new TWEEN.Tween(cube21.position);
globalThis.lanim3.to({ x: 3.8, z: -2.75 }, 1750);
globalThis.lanimb3 = new TWEEN.Tween(cube21.position);
globalThis.lanimb3.to({ x: 1.75, z: -1.25 }, 1750);
globalThis.lanimc3 = new TWEEN.Tween(cube21.rotation);
globalThis.lanimc3.to({ y: -1.75 }, 1750);
globalThis.lanimd3 = new TWEEN.Tween(cube21.rotation);
globalThis.lanimd3.to({ y: 0 }, 1750);

var geometry22 = new THREE.BoxGeometry(0.17, 0.1, 0.4); // sol kapı tutacak
var material22 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube22 = new THREE.Mesh(geometry22, material22);
scene.add(cube22);

cube22.position.z = -1.25;
cube22.position.x = 1.75;
cube22.position.y = -1;
cube22.rotation.x = 0;
cube22.rotation.y = 0;

globalThis.lanim4 = new TWEEN.Tween(cube22.position);
globalThis.lanim4.to({ x: 3.8, z: -2.75 }, 1750);
globalThis.lanimb4 = new TWEEN.Tween(cube22.position);
globalThis.lanimb4.to({ x: 1.75, z: -1.25 }, 1750);
globalThis.lanimc4 = new TWEEN.Tween(cube22.rotation);
globalThis.lanimc4.to({ y: -1.75 }, 1750);
globalThis.lanimd4 = new TWEEN.Tween(cube22.rotation);
globalThis.lanimd4.to({ y: 0 }, 1750);

var geometry12 = new THREE.BoxGeometry(0.37, 2.37, 0.2); // sağ kapı tutacak
var material12 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube12 = new THREE.Mesh(geometry12, material12);
scene.add(cube12);

cube12.position.z = -1.5;
cube12.position.x = -1.75;
cube12.position.y = 0;
cube12.rotation.x = 0;
cube12.rotation.y = 0;

globalThis.anim2 = new TWEEN.Tween(cube12.position);
globalThis.anim2.to({ x: -4.1, z: -2.75 }, 1750);
globalThis.animb2 = new TWEEN.Tween(cube12.position);
globalThis.animb2.to({ x: -1.75, z: -1.5 }, 1750);
globalThis.animc2 = new TWEEN.Tween(cube12.rotation);
globalThis.animc2.to({ y: 1.75 }, 1750);
globalThis.animd2 = new TWEEN.Tween(cube12.rotation);
globalThis.animd2.to({ y: 0 }, 1750);

var geometry23 = new THREE.BoxGeometry(0.17, 0.1, 0.4); // sağ kapı tutacak
var material23 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube23 = new THREE.Mesh(geometry23, material23);
scene.add(cube23);

cube23.position.z = -1.25;
cube23.position.x = -1.75;
cube23.position.y = 1;
cube23.rotation.x = 0;
cube23.rotation.y = 0;

globalThis.anim3 = new TWEEN.Tween(cube23.position);
globalThis.anim3.to({ x: -3.8, z: -2.75 }, 1750);
globalThis.animb3 = new TWEEN.Tween(cube23.position);
globalThis.animb3.to({ x: -1.75, z: -1.25 }, 1750);
globalThis.animc3 = new TWEEN.Tween(cube23.rotation);
globalThis.animc3.to({ y: 1.75 }, 1750);
globalThis.animd3 = new TWEEN.Tween(cube23.rotation);
globalThis.animd3.to({ y: 0 }, 1750);

var geometry24 = new THREE.BoxGeometry(0.17, 0.1, 0.4); // sağ kapı tutacak
var material24 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube24 = new THREE.Mesh(geometry24, material24);
scene.add(cube24);

cube24.position.z = -1.25;
cube24.position.x = -1.75;
cube24.position.y = -1;
cube24.rotation.x = 0;
cube24.rotation.y = 0;

globalThis.anim4 = new TWEEN.Tween(cube24.position);
globalThis.anim4.to({ x: -3.8, z: -2.75 }, 1750);
globalThis.animb4 = new TWEEN.Tween(cube24.position);
globalThis.animb4.to({ x: -1.75, z: -1.25 }, 1750);
globalThis.animc4 = new TWEEN.Tween(cube24.rotation);
globalThis.animc4.to({ y: 1.75 }, 1750);
globalThis.animd4 = new TWEEN.Tween(cube24.rotation);
globalThis.animd4.to({ y: 0 }, 1750);

var geometry6 = new THREE.BoxGeometry(0.27, 9.50, 1.9); // sağ
var material6 = new THREE.MeshBasicMaterial({ color: 0xC8A888 });
var cube6 = new THREE.Mesh(geometry6, material6);
scene.add(cube6);

cube6.position.z = 0;
cube6.position.x = -3.36;
cube6.position.y = 0;
cube6.rotation.x = 0;
cube6.rotation.y = 0;

var geometry7 = new THREE.BoxGeometry(7, 0.05, 2.25); // dolap üstü
var material7 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube7 = new THREE.Mesh(geometry7, material7);
scene.add(cube7);

cube7.position.z = -0.07;
cube7.position.x = 0;
cube7.position.y = 4.75;
cube7.rotation.x = 0;
cube7.rotation.y = 0;

var geometry13 = new THREE.BoxGeometry(3.17, 0.12, 1.37); // iç dolap üstü
var material13 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube13 = new THREE.Mesh(geometry13, material13);
scene.add(cube13);

cube13.position.z = 0.3;
cube13.position.x = 1.65;
cube13.position.y = -3;
cube13.rotation.x = 0;
cube13.rotation.y = 0;

var geometry14 = new THREE.BoxGeometry(3.17, 0.12, 1.37); // iç dolap altı
var material14 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube14 = new THREE.Mesh(geometry14, material14);
scene.add(cube14);

cube14.position.z = 0.3;
cube14.position.x = 1.65;
cube14.position.y = -4.4;
cube14.rotation.x = 0;
cube14.rotation.y = 0;

var geometry15 = new THREE.BoxGeometry(3.4, 1.4, 0.15); // iç dolap kapı
var material15 = new THREE.MeshBasicMaterial({ color: 0x783C2A });
var cube15 = new THREE.Mesh(geometry15, material15);
scene.add(cube15);

cube15.position.z = -0.4;
cube15.position.x = 1.65;
cube15.position.y = -3.7;
cube15.rotation.x = 0;
cube15.rotation.y = 0;

var geometry16 = new THREE.BoxGeometry(0.3, 0.3, 0.15); // iç dolap tut
var material16 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube16 = new THREE.Mesh(geometry16, material16);
scene.add(cube16);

cube16.position.z = -0.6;
cube16.position.x = 1.65;
cube16.position.y = -3.7;
cube16.rotation.x = 0;
cube16.rotation.y = 0;

var geometry18 = new THREE.BoxGeometry(3.17, 0.12, 1.37); // 2. iç dolap altı
var material18 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube18 = new THREE.Mesh(geometry18, material18);
scene.add(cube18);

cube18.position.z = 0.3;
cube18.position.x = 1.65;
cube18.position.y = -2.9;
cube18.rotation.x = 0;
cube18.rotation.y = 0;

globalThis.animi3 = new TWEEN.Tween(cube18.position);
globalThis.animi3.to({ z: -0.3 }, 1200);
globalThis.animib3 = new TWEEN.Tween(cube18.position);
globalThis.animib3.to({ z: 0.3 }, 1200);

var geometry19 = new THREE.BoxGeometry(3.17, 0.12, 1.37); // 2. iç dolap üstü
var material19 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube19 = new THREE.Mesh(geometry19, material19);
scene.add(cube19);

cube19.position.z = 0.3;
cube19.position.x = 1.65;
cube19.position.y = -1.5;
cube19.rotation.x = 0;
cube19.rotation.y = 0;

var geometry20 = new THREE.BoxGeometry(3.4, 1.4, 0.15); // 2. iç dolap kapı
var material20 = new THREE.MeshBasicMaterial({ color: 0x783C2A });
var cube20 = new THREE.Mesh(geometry20, material20);
scene.add(cube20);

cube20.position.z = -0.4;
cube20.position.x = 1.65;
cube20.position.y = -2.2;
cube20.rotation.x = 0;
cube20.rotation.y = 0;

globalThis.animi = new TWEEN.Tween(cube20.position);
globalThis.animi.to({ z: -1 }, 1200);
globalThis.animib = new TWEEN.Tween(cube20.position);
globalThis.animib.to({ z: -0.4 }, 1200);

var geometry29 = new THREE.BoxGeometry(0.3, 0.3, 0.15); // 2. iç dolap tut
var material29 = new THREE.MeshBasicMaterial({ color: 0x999999 });
var cube29 = new THREE.Mesh(geometry29, material29);
scene.add(cube29);

cube29.position.z = -0.6;
cube29.position.x = 1.65;
cube29.position.y = -2.2;
cube29.rotation.x = 0;
cube29.rotation.y = 0;

globalThis.animi2 = new TWEEN.Tween(cube29.position);
globalThis.animi2.to({ z: -1.1 }, 1200);
globalThis.animib2 = new TWEEN.Tween(cube29.position);
globalThis.animib2.to({ z: -0.6 }, 1200);

renderer.render(scene, camera); var animate = function () {
//cube.rotation.y -= 0.01
//cube2.rotation.y -= 0.01;
//cube3.rotation.y -= 0.01;
//cube5.rotation.y += 0.01;
//cube12.rotation.y += 0.01;
TWEEN.update();
controls.update();
renderer.render(scene, camera)
requestAnimationFrame(animate)
}
animate();
}
generateCubeProps();