<template>
    <section class="why-choose-us pull-up pb-0">
        <div class="bg-image" style="background-image: url(./images/background/4.jpg)"></div>
        <div class="anim-icons">
            <div class="float-image"><img src="/images/resource/delivery-boy.png" alt=""></div>
        </div>

        <div class="auto-container">
            <div class="row">
                <!-- Content Column -->
                <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column">
                        <div class="sec-title light">
                            <span class="sub-title">Why Choose Us</span>
                            <h2>We create opportunity to reach potential</h2>
                        </div>

                        <!-- Feature Block -->
                        <div class="feature-block-two">
                            <div class="inner-box">
                                <i class="icon flaticon-delivery-box-4"></i>
                                <h4 class="title">Safety and reliability</h4>
                                <p class="text">Aenean placerat ut lacus nec pulvinar. Donec eu leo,
                                    ante at, commodo diam.</p>
                            </div>
                        </div>

                        <!-- Feature Block -->
                        <div class="feature-block-two">
                            <div class="inner-box">
                                <i class="icon flaticon-international-shipping-3"></i>
                                <h4 class="title">Shipping worldwide</h4>
                                <p class="text">Interdum et malesuada fames ac ante ipsum primis in faucibus donec tempor
                                    nisi neque.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- form Column -->
                <div class="form-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column">
                        <!-- Contact Form -->
                        <div class="contact-form wow fadeInLeft">
                            <!--Contact Form-->
                            <form method="post" action="get" id="contact-form">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Your Name:</label>
                                        <input type="text" name="full_name" placeholder="" required>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Your Email:</label>
                                        <input type="text" name="Email" placeholder="" required>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Phone No::</label>
                                        <input type="text" name="Phone" placeholder="" required>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>DIST (Miles):</label>
                                        <div class="range-slider-one">
                                            <input type="text" class="range-amount" name="field-name">
                                            <div class="distance-range-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div class="ui-slider-range ui-widget-header ui-corner-all" style="width: 40.15%; left: 0%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 0%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 40.15%;"></span></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Freight type:</label>
                                        <select class="custom-select">
                                            <option value="">Select</option>
                                            <option value="">Air Freight</option>
                                            <option value="">Ocean Freight</option>
                                            <option value="">Rail transport</option>
                                            <option value="">Cargo ship</option>
                                            <option value="">Bulk cargo</option>
                                        </select>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Load:</label>
                                        <select class="custom-select">
                                            <option value="">Select</option>
                                            <option value="">Door to Door</option>
                                            <option value="">International shipping</option>
                                            <option value="">Multi Modal</option>
                                        </select>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <button class="theme-btn btn-style-two hvr-light" type="submit"
                                            name="submit-form"><span class="btn-title">Submit Request</span></button>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <!--End Contact Form -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>