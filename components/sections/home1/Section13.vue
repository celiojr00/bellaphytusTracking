<template>
    <section class="offer-section">
        <div class="auto-container">
            <div class="row">
                <!-- Content Column -->
                <div class="content-column col-lg-5 col-md-12">
                    <div class="inner-column">
                        <div class="sec-title light">
                            <span class="sub-title">Special Logistics</span>
                            <h2>Best services for businesses</h2>
                            <div class="text">There are many variations of passages of Lorem Ipsum available, but the
                                majority have suffered alteration in some form.</div>
                        </div>
                        <ul class="list-style-two">
                            <li><i class="fa fa-plane"></i> Urgent transport solutions</li>
                            <li><i class="fa fa-plane"></i> Top quality services with reasonable price</li>
                            <li><i class="fa fa-plane"></i> Reliable & experienced staffs</li>
                        </ul>
                        <NuxtLink to="/page-services" class="theme-btn btn-style-two hvr-light"><span
                                class="btn-title">Mais Detalhes</span></NuxtLink>
                    </div>
                </div>

                <!-- Content Column -->
                <div class="image-column col-lg-7 col-md-12 col-sm-12">
                    <div class="inner-column">
                        <div class="image-box">
                            <figure class="image"><img src="/images/resource/offer-img-1.jpg" alt=""></figure>
                            <figure class="image"><img src="/images/resource/offer-img-2.jpg" alt=""></figure>
                            <div class="fact-counter-one bounce-y">
                                <h4 class="counter-title">Trusted by</h4>
                                <div class="count-box">
                                    <ElementsCounterUp :end="4890" />
                                </div>
                            </div>
                            <div class="caption-box wow fadeIn">
                                <div class="inner">
                                    <i class="icon flaticon-logistics-3"></i>
                                    <h4 class="title">Moving your <br>products across borders</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>