class MyCube extends THREE.Group {

    constructor(parent, x, y, z, w, h, d, c) {
    super();
    
    this.geometry = new THREE.BoxGeometry(w, h, d);
    this.material = new THREE.MeshBasicMaterial({ color: c });
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
    
    this.add(new THREE.Mesh(this.geometry, this.material));
    parent.add(this);
    
    }
    
}
    
    
    