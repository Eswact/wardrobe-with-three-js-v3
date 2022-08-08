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
camera.position.set(5.75, 10.75, -15);

var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var bod = document.querySelector('body')
bod.appendChild(renderer.domElement)

const size = 50;
const divisions = 50;
const colorCenterLine = 0x334477;
const colorGrid = 0x334477;
const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
scene.add(gridHelper);

var c = new MyCube(scene, 0, 0.5, 0, cubeProps.width, cubeProps.height, cubeProps.depth, 0xB69E79); //alt
//var c = new MyCube(scene, node);
var c = new MyCube(scene, 0, 9.8, 0, 6.50, 0.25, 1.9, 0xB69E79); //üst
var c = new MyCube(scene, 3.36, 5.2, 0, 0.27, 9.50, 1.9, 0xC8A888); // sol
var c = new MyCube(scene, -3.36, 5.2, 0, 0.27, 9.50, 1.9, 0xC8A888); // sağ
var c = new MyCube(scene, 0, 5.2, 1, 7, 9.45, 0.1, 0x774D2B); // arka
var c = new MyCube(scene, 0, 9.95, -0.07, 7, 0.05, 2.25, 0x999999); // dolap üstü
var c = new MyCube(scene, 0, 0.2, -0.075, 7, 0.50, 2.25, 0x999999); // baza
var c = new MyCube(scene, 0, 5.15, 0, 0.12, 9.06, 1.9, 0xC8A888); // orta dikey raf
var c = new MyCube(scene, -1.65, 1.9, 0, 0.12, 2.5, 1.9, 0x999999); // sağ orta dikey raf
var c = new MyCube(scene, -1.65, 0.7, 0, 3.17, 0.12, 1.9, 0x999999); // alt yatay raf
var c = new MyCube(scene, -1.65, 1.9, 0, 3.17, 0.12, 1.9, 0x999999); // orta yatay raf
var c = new MyCube(scene, -1.65, 3.1, 0, 3.17, 0.12, 1.9, 0x999999); // üst yatay raf
var c = new MyCube(scene, -1.65, 8.5, -0.37, 3.17, 0.12, 0.12, 0x999999); // askılık
var c = new MyCube(scene, 1.65, 8.5, -0.37, 3.17, 0.12, 0.12, 0x999999); // askılık
var cl = new MyCube(scene, 1.75, 5.2, -1.08, 3.5, 9.45, 0.25, 0x722829); // sol kapı
globalThis.lanim = new TWEEN.Tween(cl.position);
globalThis.lanim.to({ x: 3.7, z: -2.75 }, 1750);
globalThis.lanimb = new TWEEN.Tween(cl.position);
globalThis.lanimb.to({ x: 1.75, z: -1.08 }, 1750);
globalThis.lanimc = new TWEEN.Tween(cl.rotation);
globalThis.lanimc.to({ y: -1.75 }, 1750);
globalThis.lanimd = new TWEEN.Tween(cl.rotation);
globalThis.lanimd.to({ y: 0 }, 1750);
var cr = new MyCube(scene, -1.75, 5.2, -1.08, 3.5, 9.45, 0.25, 0x722829); // sağ kapı
globalThis.anim = new TWEEN.Tween(cr.position);
globalThis.anim.to({ x: -3.7, z: -2.75 }, 1750);
globalThis.animb = new TWEEN.Tween(cr.position);
globalThis.animb.to({ x: -1.75, z: -1.08 }, 1750);
globalThis.animc = new TWEEN.Tween(cr.rotation);
globalThis.animc.to({ y: 1.75 }, 1750);
globalThis.animd = new TWEEN.Tween(cr.rotation);
globalThis.animd.to({ y: 0 }, 1750);
var cl2 = new MyCube(scene, 1.75, 5.2, -1.5, 0.3, 2.37, 0.2, 0x999999); // sol kapı kulpu
globalThis.lanim2 = new TWEEN.Tween(cl2.position);
globalThis.lanim2.to({ x: 4.1, z: -2.75 }, 1750);
globalThis.lanimb2 = new TWEEN.Tween(cl2.position);
globalThis.lanimb2.to({ x: 1.75, z: -1.5 }, 1750);
globalThis.lanimc2 = new TWEEN.Tween(cl2.rotation);
globalThis.lanimc2.to({ y: -1.75 }, 1750);
globalThis.lanimd2 = new TWEEN.Tween(cl2.rotation);
globalThis.lanimd2.to({ y: 0 }, 1750);
var cl3 = new MyCube(scene, 1.75, 6.2, -1.25, 0.17, 0.1, 0.4, 0x999999); // sol kapı kulpu
globalThis.lanim3 = new TWEEN.Tween(cl3.position);
globalThis.lanim3.to({ x: 3.8, z: -2.75 }, 1750);
globalThis.lanimb3 = new TWEEN.Tween(cl3.position);
globalThis.lanimb3.to({ x: 1.75, z: -1.25 }, 1750);
globalThis.lanimc3 = new TWEEN.Tween(cl3.rotation);
globalThis.lanimc3.to({ y: -1.75 }, 1750);
globalThis.lanimd3 = new TWEEN.Tween(cl3.rotation);
globalThis.lanimd3.to({ y: 0 }, 1750);
var cl4 = new MyCube(scene, 1.75, 4.2, -1.25, 0.17, 0.1, 0.4, 0x999999); // sol kapı kulpu
globalThis.lanim4 = new TWEEN.Tween(cl4.position);
globalThis.lanim4.to({ x: 3.8, z: -2.75 }, 1750);
globalThis.lanimb4 = new TWEEN.Tween(cl4.position);
globalThis.lanimb4.to({ x: 1.75, z: -1.25 }, 1750);
globalThis.lanimc4 = new TWEEN.Tween(cl4.rotation);
globalThis.lanimc4.to({ y: -1.75 }, 1750);
globalThis.lanimd4 = new TWEEN.Tween(cl4.rotation);
globalThis.lanimd4.to({ y: 0 }, 1750);
var cr2 = new MyCube(scene, -1.75, 5.2, -1.5, 0.37, 2.37, 0.2, 0x999999); // sağ kapı kulpu
globalThis.anim2 = new TWEEN.Tween(cr2.position);
globalThis.anim2.to({ x: -4.1, z: -2.75 }, 1750);
globalThis.animb2 = new TWEEN.Tween(cr2.position);
globalThis.animb2.to({ x: -1.75, z: -1.5 }, 1750);
globalThis.animc2 = new TWEEN.Tween(cr2.rotation);
globalThis.animc2.to({ y: 1.75 }, 1750);
globalThis.animd2 = new TWEEN.Tween(cr2.rotation);
globalThis.animd2.to({ y: 0 }, 1750);
var cr3 = new MyCube(scene, -1.75, 6.2, -1.25, 0.17, 0.1, 0.4, 0x999999); // sağ kapı kulpu
globalThis.anim3 = new TWEEN.Tween(cr3.position);
globalThis.anim3.to({ x: -3.8, z: -2.75 }, 1750);
globalThis.animb3 = new TWEEN.Tween(cr3.position);
globalThis.animb3.to({ x: -1.75, z: -1.25 }, 1750);
globalThis.animc3 = new TWEEN.Tween(cr3.rotation);
globalThis.animc3.to({ y: 1.75 }, 1750);
globalThis.animd3 = new TWEEN.Tween(cr3.rotation);
globalThis.animd3.to({ y: 0 }, 1750);
var cr4 = new MyCube(scene, -1.75, 4.2, -1.25, 0.17, 0.1, 0.4, 0x999999); // sağ kapı kulpu
globalThis.anim4 = new TWEEN.Tween(cr4.position);
globalThis.anim4.to({ x: -3.8, z: -2.75 }, 1750);
globalThis.animb4 = new TWEEN.Tween(cr4.position);
globalThis.animb4.to({ x: -1.75, z: -1.25 }, 1750);
globalThis.animc4 = new TWEEN.Tween(cr4.rotation);
globalThis.animc4.to({ y: 1.75 }, 1750);
globalThis.animd4 = new TWEEN.Tween(cr4.rotation);
globalThis.animd4.to({ y: 0 }, 1750);
var c = new MyCube(scene, 1.65, 2, 0.3, 3.17, 0.12, 1.37, 0x999999); // iç dolap üstü
var c = new MyCube(scene, 1.65, 1.3, -0.4, 3.2, 1.4, 0.15, 0x722829); // iç dolap kapı
var c = new MyCube(scene, 1.65, 1.3, -0.6, 0.3, 0.3, 0.15, 0x999999); // iç dolap kapı kulpu
var c = new MyCube(scene, 1.65, 0.6, 0.3, 3.17, 0.12, 1.37, 0x999999); // iç dolap altı
var c = new MyCube(scene, 1.65, 3.4, 0.3, 3.17, 0.12, 1.37, 0x999999); // 2. iç dolap üstü
var ci = new MyCube(scene, 1.65, 2.75, -0.4, 3.2, 1.4, 0.15, 0x722829); // 2. iç dolap kapı
globalThis.animi = new TWEEN.Tween(ci.position);
globalThis.animi.to({ z: -1 }, 1200);
globalThis.animib = new TWEEN.Tween(ci.position);
globalThis.animib.to({ z: -0.4 }, 1200);
var ci2 = new MyCube(scene, 1.65, 2.75, -0.6, 0.3, 0.3, 0.15, 0x999999); // 2. iç dolap kapı kulpu
globalThis.animi2 = new TWEEN.Tween(ci2.position);
globalThis.animi2.to({ z: -1.1 }, 1200);
globalThis.animib2 = new TWEEN.Tween(ci2.position);
globalThis.animib2.to({ z: -0.6 }, 1200);
var ci3 = new MyCube(scene, 1.65, 2.1, 0.3, 3.17, 0.12, 1.37, 0x999999); // 2. iç dolap altı
globalThis.animi3 = new TWEEN.Tween(ci3.position);
globalThis.animi3.to({ z: -0.3 }, 1200);
globalThis.animib3 = new TWEEN.Tween(ci3.position);
globalThis.animib3.to({ z: 0.3 }, 1200);

renderer.render(scene, camera); var animate = function () {
    TWEEN.update();
    controls.update();
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
    }
    animate();
}
generateCubeProps();