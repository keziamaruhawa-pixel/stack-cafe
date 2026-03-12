$(document).ready(function() {
  
  const focusSelector = 'h1, h2, h3, h4, h5, h6, p, li, a, strong, em, span';
  let focusedElement = null;
  
  $(focusSelector).on('mouseenter', function() {
    const $this = $(this);
    const text = $this.text().substring(0, 40);
    
    // Simpan elemen yang sebelumnya difocus
    if (focusedElement) {
      $(focusedElement).trigger('mouseleave');
    }
    
    focusedElement = this;
    
    // Tambah class
    $this.addClass('text-focused');
    
    // Styling
    $this.css({
      'color': '#8b5e3c',
      'background-color': '#fffbf0',
      'padding': '4px 6px',
      'border-left': '3px solid #b87a4b',
      'border-radius': '3px',
      'box-shadow': '0 0 8px rgba(139, 94, 60, 0.4)',
      'transform': 'translateX(5px)',
      'font-weight': '500'
    });
    
    // Console log dengan emoji
    console.log('🎯 FOCUS ON: ' + text);
  });
  
  $(focusSelector).on('mouseleave', function() {
    const $this = $(this);
    
    $this.removeClass('text-focused');
    
    $this.css({
      'color': '',
      'background-color': '',
      'padding': '',
      'border-left': '',
      'box-shadow': '',
      'transform': '',
      'font-weight': ''
    });
    
    console.log('❌ BLUR');
  });
  
});