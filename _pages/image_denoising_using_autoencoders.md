---
title: "Image Denoising Using Autoencoders"
permalink: /image_denoising_using_autoencoders
author_profile: false
---

<script src="assets/js/plugins/BeerSlider.js"></script>

## Abstract

In today’s world digital photography is a crucial part of our lives. Most of those images are taken with mobile devices such as smartphones. Due to their compact design there are limited space for imaging equipment, thus high-quality components used in DSLR cameras are not used in compact devices. Those small sized components used in compact devices inevitably causes noisier images. Another point is while storing images usually compression algorithms are used in order to save from space. Those methods are also causing an increase in the amount of noise. To reduce the effects of the noise visibly, denoising algorithms are used. This project aims to study and implement several deep neural network based denoising methods in order to understand their working principles and comparing the performance of autoencoder based deep models with the state-of-the-art methods. At this project smartphone image denoising dataset (SIDD) is used to satisfy the data needs. Within the scope of this project, 3 different techniques are used while implementing deep autoencoder models and those models are trained using smartphone image denoising dataset. Autoencoder architecture is mainly used in this project because of its success in the denoising task. This success of autoencoder architecture is due to its ability of setting the target values to be equal to the inputs. By using this property of autoencoders when clean image x is given as input and noisy image y is given as output, noise n should be reduced due to the bottleneck created in the latent space between encoder and decoder layers. That can be also shown as if x = y, then x = y + n if and only if n=0. Moreover, within the scope of this project benchmarking is done using SSIM and PSNR metrics of the implemented autoencoder based models. According to the benchmark results, it has been seen that deeper models are performing better at denoising task. Finally, all of the results are compared with the state-of-the-art methods.

---

<div class="paper-info">

  <div class="paper-info paper-image">
    <img src="assets/images/cs402_report_image.png" href="./assets/cs402_report.pdf">
  </div>

  <div class="paper-info paper-data">

  <ul>
    <li><b>Project Report</b></li>
    <li>Doğa Yılmaz "Image Denoising Using Autoencoders".</li>
    <li>Supervised by Assist. Prof. Dr. M. Furkan Kıraç.</li>
    <li><b>Project Report: </b><a href="./assets/cs402_report.pdf" download="DogaYilmaz_FurkanKirac_image_denoising_using_autoencoders">PDF Link</a></li>
    <li><b>Code: </b> <a href='https://github.com/yilmazdoga/image_denoising_using_autoencoders'>PyTorch Implementation</a></li>
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
