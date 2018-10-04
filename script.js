$.Ajax({
    url: 'https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en',
    success: function (data) {
        bodyEL.innerhtml = document.querySelector('body');
        for (i = 0; i > data.length; i++) {
            <h1>
                A Flower A Day...
        </h1>
                <button id="some-question">
                    Whats new at TechKaro?
            </button>
                <a id="img">
                    <img src="" class="flower-img" alt="">
        </a>
                    <div class="date-tech">
                        <h6 id="date-time">
                            <i class="fas fa-calendar-alt"></i>
                        </h6>
                        <h6 id="date-time">
                            <i class="fas fa-user-alt"></i>
                        </h6>
                    </div>
                    <div class="para">
                        <h4>
                        </h4>
                        <p>

                        </p>
                    </div>
                    }
    }
})