
import * as THREE from 'three';

export class ThreeScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private shapes: THREE.Mesh[] = [];
  private mouse = new THREE.Vector2();
  private animationFrameId: number | null = null;

  constructor(container: HTMLElement) {
    // Initialize scene
    this.scene = new THREE.Scene();
    
    // Initialize camera
    const { width, height } = container.getBoundingClientRect();
    this.camera = new THREE.PerspectiveCamera(
      75, 
      width / height, 
      0.1, 
      1000
    );
    this.camera.position.z = 5;
    
    // Initialize renderer
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);
    
    // Add event listeners
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('mousemove', this.handleMouseMove);
    
    // Create initial scene
    this.createShapes();
    this.addLights();
    this.animate();
  }

  private handleResize = () => {
    const container = this.renderer.domElement.parentElement;
    if (!container) return;
    
    const { width, height } = container.getBoundingClientRect();
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    
    this.renderer.setSize(width, height);
  };

  private handleMouseMove = (event: MouseEvent) => {
    // Calculate mouse position in normalized device coordinates
    const container = this.renderer.domElement;
    const rect = container.getBoundingClientRect();
    
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  };

  private createShapes() {
    // Create different shapes
    const colors = [0x6D1A36, 0xCB5C29, 0xF4B942, 0x1A7B88];
    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0),
      new THREE.TorusGeometry(0.3, 0.12, 16, 32),
      new THREE.TetrahedronGeometry(0.4),
      new THREE.OctahedronGeometry(0.4)
    ];
    
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const material = new THREE.MeshStandardMaterial({ 
        color: colors[i % colors.length],
        roughness: 0.5,
        metalness: 0.2
      });
      
      const shape = new THREE.Mesh(geometry, material);
      
      // Position randomly
      shape.position.x = (Math.random() - 0.5) * 10;
      shape.position.y = (Math.random() - 0.5) * 10;
      shape.position.z = (Math.random() - 0.5) * 5;
      
      // Random rotation
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      
      this.shapes.push(shape);
      this.scene.add(shape);
    }
  }

  private addLights() {
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    this.scene.add(directionalLight);
  }

  private animate = () => {
    this.animationFrameId = requestAnimationFrame(this.animate);
    
    // Animate shapes
    this.shapes.forEach((shape, i) => {
      shape.rotation.x += 0.001 * (i % 2 === 0 ? 1 : -1);
      shape.rotation.y += 0.002;
      
      // Subtle movement based on mouse position
      shape.position.x += (this.mouse.x * 0.01 - shape.position.x * 0.002);
      shape.position.y += (this.mouse.y * 0.01 - shape.position.y * 0.002);
    });
    
    this.renderer.render(this.scene, this.camera);
  };

  public destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove);
    
    // Dispose resources
    this.shapes.forEach(shape => {
      shape.geometry.dispose();
      (shape.material as THREE.Material).dispose();
      this.scene.remove(shape);
    });
    
    // Remove canvas
    const canvas = this.renderer.domElement;
    canvas.parentElement?.removeChild(canvas);
    
    this.renderer.dispose();
  }
}
