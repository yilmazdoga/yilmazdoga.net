---
title: "Deep Residual Autoencoder for Real Image Denoising"
permalink: /deep_residual_autoencoder_for_real_image_denoising
author_profile: false
---

<script src="assets/js/plugins/BeerSlider.js"></script>

## Abstract

Image denoising is one of the fundamental prob- lems in low-level computer vision since it has found more and more real-world applications every day. Var- ious approaches have been used for image denoising throughout the years such as block-matching and 3D filtering (BM3D). In the recent years learning-based approaches have outperformed the traditional meth- ods such as BM3D. However, most of these learning- based methods makes the assumption that the real- world noise is fully modeled with various noise model such as additive white Gaussian noise (AWGN). These methods struggle to achieve outstanding performance when it comes to real-world noide. With the recent re- lease of real-world noise datasets such as Smartphone Image Denoising Dataset (SIDD) and Darmstadt Noise Dataset (DND), the limitation caused by lack of real world noise data has eliminated. In this paper, we pro- pose a deep convolutional autoencoder network com- bined with symmetric residual connections for real im- age denoising. We used the real-world images provided by SIDD for the training of the proposed model. Also, we have experimented with L1, L2, SSIM, MS-SSIM and sum of L1 and MS-SSIM loss functions in order to optimize the performance of our proposed model both qualitatively and quantitative. Our experimen- tal results show that our proposed model outperforms the traditional methods and offers similar performance with state-of-the-art methods in blind real image de- noising.

---

<div class="paper-info">

  <div class="paper-info paper-image">
    <img src="assets/images/cs402_report_image.png" href="./assets/cs402_report.pdf">
  </div>

  <div class="paper-info paper-data">

  <ul>
    <li><b>Project Report</b></li>
    <li>Doğa Yılmaz "Deep Residual Autoencoder for Real Image Denoising".</li>
    <li>Supervised by Assist. Prof. Dr. M. Furkan Kıraç.</li>
    <li><b>Project Report: </b><a href="./assets/deep_residual_autoencoder_for_real_image_denoising.pdf">PDF Link</a></li>
    <li><b>Code: </b> <a href='https://github.com/yilmazdoga/Deep_Residual_Autoencoder_for_Real_Image_Denoising'>PyTorch Implementation</a></li>
  </ul>

  </div>

</div>


## Results

<div class="beer-container">
  <header>

  </header>
  <div id="compare0" class="beer-slider" data-beer-label="Denoised">
    <img src="assets/images/DENOISED_0.png"  alt="Denoised">
    <div class="beer-reveal" data-beer-label="Noisy">
      <img src="assets/images/NOISY_0.png"  alt="Noisy">
  </div>
</div>
</div>

<div class="beer-container">
  <header>

  </header>
  <div id="compare1" class="beer-slider" data-beer-label="Denoised">
    <img src="assets/images/DENOISED_1.png"  alt="Denoised">
    <div class="beer-reveal" data-beer-label="Noisy">
      <img src="assets/images/NOISY_1.png"  alt="Noisy">
  </div>
</div>
</div>

<div class="beer-container">
  <header>

  </header>
  <div id="compare2" class="beer-slider" data-beer-label="Denoised">
    <img src="assets/images/DENOISED_2.png"  alt="Denoised">
    <div class="beer-reveal" data-beer-label="Noisy">
      <img src="assets/images/NOISY_2.png"  alt="Noisy">
  </div>
</div>
</div>

<div class="beer-container">
  <header>

  </header>
  <div id="compare3" class="beer-slider" data-beer-label="Denoised">
    <img src="assets/images/AEv2_0_DENOISED_Big.png"  alt="Denoised">
    <div class="beer-reveal" data-beer-label="Noisy">
      <img src="assets/images/NOISY_Big.png"  alt="Noisy">
  </div>
</div>
</div>

<script>
  new BeerSlider( document.getElementById( "compare0" ) );
  new BeerSlider( document.getElementById( "compare1" ) );
  new BeerSlider( document.getElementById( "compare2" ) );
  new BeerSlider( document.getElementById( "compare3" ) );
</script>
