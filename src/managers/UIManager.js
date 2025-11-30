
export class UIManager {
  constructor() {
    this.overlay = document.createElement('div')
    this.overlay.style.position = 'absolute'
    this.overlay.style.top = '20px'
    this.overlay.style.left = '50%'
    this.overlay.style.transform = 'translateX(-50%)'
    this.overlay.style.display = 'none'
    this.overlay.style.gap = '20px'
    this.overlay.style.padding = '10px 20px'
    this.overlay.style.background = 'rgba(0, 0, 0, 0.5)'
    this.overlay.style.borderRadius = '10px'
    this.overlay.style.pointerEvents = 'none' // Let clicks pass through
    this.overlay.style.zIndex = '1000'
    
    this.arrows = {
      LEFT: this.createArrow('⬅️'),
      STRAIGHT: this.createArrow('⬆️'),
      RIGHT: this.createArrow('➡️')
    }
    
    this.overlay.appendChild(this.arrows.LEFT)
    this.overlay.appendChild(this.arrows.STRAIGHT)
    this.overlay.appendChild(this.arrows.RIGHT)
    
    document.body.appendChild(this.overlay)
  }
  
  createArrow(symbol) {
    const el = document.createElement('div')
    el.textContent = symbol
    el.style.fontSize = '40px'
    el.style.opacity = '0.3'
    el.style.transition = 'opacity 0.2s'
    el.style.textShadow = '0 2px 4px rgba(0,0,0,0.5)'
    return el
  }
  
  show() {
    this.overlay.style.display = 'flex'
  }
  
  hide() {
    this.overlay.style.display = 'none'
  }
  
  setDirection(direction) {
    // Reset all
    Object.values(this.arrows).forEach(el => {
      el.style.opacity = '0.3'
      el.style.transform = 'scale(1)'
    })
    
    // Highlight active
    if (direction === 'LEFT') {
      this.arrows.LEFT.style.opacity = '1'
      this.arrows.LEFT.style.transform = 'scale(1.2)'
    } else if (direction === 'RIGHT') {
      this.arrows.RIGHT.style.opacity = '1'
      this.arrows.RIGHT.style.transform = 'scale(1.2)'
    } else if (direction === 'STRAIGHT') {
      this.arrows.STRAIGHT.style.opacity = '1'
      this.arrows.STRAIGHT.style.transform = 'scale(1.2)'
    }
  }
}
