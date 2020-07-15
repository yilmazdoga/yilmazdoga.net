---
title: "Image Denoising Using Autoencoders"
permalink: /inprogress
author_profile: false
---

<script src="assets/js/plugins/BeerSlider.js"></script>

## Abstract

In today’s world digital photography is a crucial part of our lives. Most of those images are taken with mobile devices such as smartphones. Due to their compact design there are limited space for imaging equipment, thus high-quality components used in DSLR cameras are not used in compact devices. Those small sized components used in compact devices inevitably causes noisier images. Another point is while storing images usually compression algorithms are used in order to save from space. Those methods are also causing an increase in the amount of noise. To reduce the effects of the noise visibly, denoising algorithms are used. This project aims to study and implement several deep neural network based denoising methods in order to understand their working principles and comparing the performance of autoencoder based deep models with the state-of-the-art methods. At this project smartphone image denoising dataset (SIDD) is used to satisfy the data needs. Within the scope of this project, 3 different techniques are used while implementing deep autoencoder models and those models are trained using smartphone image denoising dataset. Autoencoder architecture is mainly used in this project because of its success in the denoising task. This success of autoencoder architecture is due to its ability of setting the target values to be equal to the inputs. By using this property of autoencoders when clean image x is given as input and noisy image y is given as output, noise $n$ should be reduced due to the bottleneck created in the latent space between encoder and decoder layers. That can be also shown as if x = y, then x = y + n if and only if n=0. Moreover, within the scope of this project benchmarking is done using SSIM and PSNR metrics of the implemented autoencoder based models. According to the benchmark results, it has been seen that deeper models are performing better at denoising task. Finally, all of the results are compared with the state-of-the-art methods.

## Introduction

With the advancing technology, almost every mobile device we have contains some sort of photo or video capturing capabilities. However, most of them are designed to be compact. Thus, they have very little room inside for the camera sensor. As a result, most of them use small sized sensors which causes an increased noise in the taken image compared to the larger sensor sized DSLR counterparts.

Today image denoising is an active research area which aims to obtain clean image x from noisy version y that can be shown as x = y + n where n is the noise. This project aims develop deep neural network models which generates an output which converges to x when a noisy image y is supplied. A more detailed description of the image denoising problem will be provided in the problem statement section. As deep neural networks require big amount of data to work, a high-quality image denoising dataset is required. Due to its recency and quality, smartphone image denoising dataset (SIDD) will be used to satisfy the data needs.

This project offers numerous methods to perform the denoising operation. All of the proposed methods are convolutional neural network (CNN) based since this method have shown its superior performance in image processing and computer vision tasks. Also, in some of the proposed deep neural network models, residual learning is used in order to improve the denoising performance. These methods are detailly explained in the proposed solution section with their architecture and working principles.

To implement and train deep neural network models efficiently, a machine learning framework is needed. PyTorch is used in this project due to its performance and ease of use. Also, as programming language python is used because of its compatibility with PyTorch and ease of use. As data visualization tool TensorBoard is used because it provides live tracking of the desired data and also it is supported by PyTorch.

Within the scope of this project, SIDD medium dataset has been divided as training and validation sets, data loaders for each set is implemented in order to use the data with PyTorch. After that, dataloaders have been optimized in order to avoid any bottlenecks while loading images every epoch. Following that, various deep autoencoder models are implemented using mainly 3 different techniques which will be explained in the neural network architectures section. At the table 1, a performance preview of the proposed models can be found.

## Examples

Commit this

<div style="margin: 0 auto">
<div id="compare0" class="beer-slider" data-beer-label="Denoised">
  <img src="assets/images/DENOISED_0.png"  alt="Denoised">
  <div class="beer-reveal" data-beer-label="Noisy">
    <img src="assets/images/NOISY_0.png"  alt="Noisy">
</div>
</div>
</div>

<div style="margin: 0 auto">
<div id="compare1" class="beer-slider" data-beer-label="Denoised">
  <img src="assets/images/DENOISED_1.png"  alt="Denoised">
  <div class="beer-reveal" data-beer-label="Noisy">
    <img src="assets/images/NOISY_1.png"  alt="Noisy">
</div>
</div>
</div>


<div style="margin: 0 auto">
<div id="compare2" class="beer-slider" data-beer-label="Denoised">
  <img src="assets/images/DENOISED_2.png"  alt="Denoised">
  <div class="beer-reveal" data-beer-label="Noisy">
    <img src="assets/images/NOISY_2.png"  alt="Noisy">
</div>
</div>
</div>

<script>
  new BeerSlider( document.getElementById( "compare0" ) );
  new BeerSlider( document.getElementById( "compare1" ) );
  new BeerSlider( document.getElementById( "compare2" ) );
</script>
