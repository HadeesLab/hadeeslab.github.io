
document.getElementById('downloadBtn').addEventListener('click', function() {
  this.innerHTML = '<i class="fas fa-check"></i> Downloaded';
  this.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';
  setTimeout(() => {
    this.innerHTML = '<i class="fas fa-cloud-download-alt"></i> DOWNLOAD NOW';
    this.style.background = 'linear-gradient(45deg, #7b2cbf, #9d4edd)';
  }, 2000);
});
