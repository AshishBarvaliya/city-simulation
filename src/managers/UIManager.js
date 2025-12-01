
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

  setPath(pathDetails) {
    // Create path container if it doesn't exist
    if (!this.pathContainer) {
      this.pathContainer = document.createElement('div')
      this.pathContainer.style.position = 'absolute'
      this.pathContainer.style.top = '100px'
      this.pathContainer.style.left = '50%'
      this.pathContainer.style.transform = 'translateX(-50%)'
      this.pathContainer.style.display = 'flex'
      this.pathContainer.style.flexDirection = 'column'
      this.pathContainer.style.gap = '5px'
      this.pathContainer.style.pointerEvents = 'none'
      document.body.appendChild(this.pathContainer)
    }

    // Clear existing
    this.pathContainer.innerHTML = ''
    this.pathContainer.style.display = this.overlay.style.display

    // Add new items
    pathDetails.forEach((turn, index) => {
      const el = document.createElement('div')
      el.textContent = `${index + 1}. ${turn}`
      el.style.color = 'white'
      el.style.fontSize = '16px'
      el.style.textShadow = '0 1px 2px black'
      el.style.backgroundColor = 'rgba(0,0,0,0.5)'
      el.style.padding = '2px 8px'
      el.style.borderRadius = '4px'
      
      // Highlight the immediate next turn
      if (index === 0) {
        el.style.color = '#ffff00'
        el.style.fontWeight = 'bold'
      }
      
      this.pathContainer.appendChild(el)
    })
  }
}
