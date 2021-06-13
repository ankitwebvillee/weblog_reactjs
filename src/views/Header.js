const Header = (props) => {
  return (
    <>
      <header id="header">
        <div id="nav">
          <div id="nav-top">
            <div class="container">
              <ul class="nav-social">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>

              <div class="nav-logo">
                <a href="index.html" class="logo">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAfCAMAAADX0sPpAAAAVFBMVEUAAAD///8RFRzuQmYRFRwRFRzuQmYRFRzuQmYRFRwRFRzuQmYRFRzuQmYRFRzuQmYRFRzuQmYRFRzuQmYRFRwRFRwRFRzuQmYRFRzuQmYRFRzuQmYmrce+AAAAGnRSTlMAABERIjMzRERVZmZ3d4iImZmqqrvM3d3u7h84PuUAAAG/SURBVEjHvZbbYoMgDIZbhqO41DknjOH7v+fEQKVAOaxuufKEX0j+JJxOx9nb97K8hw/Pux2Iui7GPo9lMW0MgsvT18ZaXv+DhajlUsGiMG4LJcBT+3opsrjQng3kFyzM10cpX3TWgfXtrDoddkpHNrazkhawUiit+V+wiHRZYlvmplIQn2Ch/LSgt3+pHUVgsOpkJdZl08bVE/amghnIjYWf69nzhUqL4r5mRNfCopOXe2JZuC2VUvkYpJDVs9idBmSHLPU45H3AUrSWxaKVhtXhTbp4ZbIQyiwSKVsYFvou0iJaX6ImuPRcKrNs8M3z82Cbw8qCbOUO7sJ6yqtYBOPWoeaZ21iBtRskAWmW962pL7wl9SzewBo9CawslAQv5Gt1cbhLcR1rTvU8KOiwjxY8xcrVF+gDWX22b1Cs+T5TVLl8dXHvTfRDIti+rWxjyulwqunznUQCvqDtmidewA0E2IP5xUY3vwZvkFHVwHLuz8ywerGWdWku41aUgYFq0UbcDyUtnDfiDlrLcpUU9N7cOcovL6laWFvO/ZnCHp8Pqd+YMAiyieWyjTbRmnMvnhkmsLOsgXXrbzNQ1PwPtC6KHR4TyyQAAAAASUVORK5CYII="
                    alt=""
                    data-pagespeed-url-hash="3737556316"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                </a>
              </div>

              <div class="nav-btns">
                <button class="aside-btn">
                  <i class="fa fa-bars"></i>
                </button>
                <button class="search-btn">
                  <i class="fa fa-search"></i>
                </button>
                <div id="nav-search">
                  <form>
                    <input
                      class="input"
                      name="search"
                      placeholder="Enter your search..."
                    />
                  </form>
                  <button class="nav-close search-close">
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="nav-bottom">
            <div class="container">
              <ul class="nav-menu">
                <li class="has-dropdown">
                  <a href="index.html">
                    Home <i class="fas fa-chevron-down"></i>
                  </a>

                  <div class="dropdown">
                    <div class="dropdown-body">
                      <ul class="dropdown-list">
                        <li>
                          <a href="category.html">Category page</a>
                        </li>
                        <li>
                          <a href="blog-post.html">Post page</a>
                        </li>
                        <li>
                          <a href="author.html">Author page</a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contacts</a>
                        </li>
                        <li>
                          <a href="blank.html">Regular</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="has-dropdown megamenu">
                  <a href="#">
                    Lifestyle <i class="fas fa-chevron-down"></i>
                  </a>
                  <div class="dropdown tab-dropdown">
                    <div class="row">
                      <div class="col-md-2">
                        <ul class="tab-nav">
                          <li class="active">
                            <a data-toggle="tab" href="#tab1">
                              Lifestyle
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab2">
                              Fashion
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab1">
                              Health
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab2">
                              Travel
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-10">
                        <div class="dropdown-body tab-content">
                          <div id="tab1" class="tab-pane fade in active">
                            <div class="row">
                              <div class="col-md-4">
                                <div class="post post-sm">
                                  <a class="post-img" href="blog-post.html">
                                    <img
                                      src="https://preview.colorlib.com/theme/callie/img/xhot-post-2.jpg.pagespeed.ic.Eub7HkhSvh.webp"
                                      alt=""
                                      data-pagespeed-url-hash="2925843525"
                                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    />
                                  </a>
                                  <div class="post-body">
                                    <div class="post-category">
                                      <a href="category.html">Travel</a>
                                    </div>
                                    <h3 class="post-title title-sm">
                                      <a href="blog-post.html">
                                        Sed ut perspiciatis, unde omnis iste
                                        natus error sit
                                      </a>
                                    </h3>
                                    <ul class="post-meta">
                                      <li>
                                        <a href="author.html">John Doe</a>
                                      </li>
                                      <li>20 April 2018</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="post post-sm">
                                  <a class="post-img" href="blog-post.html">
                                    <img
                                      src="https://preview.colorlib.com/theme/callie/img/xhot-post-2.jpg.pagespeed.ic.Eub7HkhSvh.webp"
                                      alt=""
                                      data-pagespeed-url-hash="3809343288"
                                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    />
                                  </a>
                                  <div class="post-body">
                                    <div class="post-category">
                                      <a href="category.html">Travel</a>
                                      <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 class="post-title title-sm">
                                      <a href="blog-post.html">
                                        Mel ut impetus suscipit tincidunt. Cum
                                        id ullum laboramus persequeris.
                                      </a>
                                    </h3>
                                    <ul class="post-meta">
                                      <li>
                                        <a href="author.html">John Doe</a>
                                      </li>
                                      <li>20 April 2018</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="post post-sm">
                                  <a class="post-img" href="blog-post.html">
                                    <img
                                      src="https://preview.colorlib.com/theme/callie/img/xhot-post-2.jpg.pagespeed.ic.Eub7HkhSvh.webp"
                                      alt=""
                                      data-pagespeed-url-hash="3514843367"
                                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    />
                                  </a>
                                  <div class="post-body">
                                    <div class="post-category">
                                      <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 class="post-title title-sm">
                                      <a href="blog-post.html">
                                        Mel ut impetus suscipit tincidunt. Cum
                                        id ullum laboramus persequeris.
                                      </a>
                                    </h3>
                                    <ul class="post-meta">
                                      <li>
                                        <a href="author.html">John Doe</a>
                                      </li>
                                      <li>20 April 2018</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="tab2" class="tab-pane fade in">
                            <div class="row">
                              <div class="col-md-4">
                                <div class="post post-sm">
                                  <a class="post-img" href="blog-post.html">
                                    <img
                                      src="https://preview.colorlib.com/theme/callie/img/xhot-post-2.jpg.pagespeed.ic.Eub7HkhSvh.webp"
                                      alt=""
                                      data-pagespeed-url-hash="770650493"
                                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    />
                                  </a>
                                  <div class="post-body">
                                    <div class="post-category">
                                      <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 class="post-title title-sm">
                                      <a href="blog-post.html">
                                        Postea senserit id eos, vivendo
                                        periculis ei qui
                                      </a>
                                    </h3>
                                    <ul class="post-meta">
                                      <li>
                                        <a href="author.html">John Doe</a>
                                      </li>
                                      <li>20 April 2018</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="post post-sm">
                                  <a class="post-img" href="blog-post.html">
                                    <img
                                      src="https://preview.colorlib.com/theme/callie/img/xhot-post-2.jpg.pagespeed.ic.Eub7HkhSvh.webp"
                                      alt=""
                                      data-pagespeed-url-hash="1654150256"
                                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    />
                                  </a>
                                  <div class="post-body">
                                    <div class="post-category">
                                      <a href="category.html">Fashion</a>
                                      <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 class="post-title title-sm">
                                      <a href="blog-post.html">
                                        Sed ut perspiciatis, unde omnis iste
                                        natus error sit
                                      </a>
                                    </h3>
                                    <ul class="post-meta">
                                      <li>
                                        <a href="author.html">John Doe</a>
                                      </li>
                                      <li>20 April 2018</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="post post-sm">
                                  <a class="post-img" href="blog-post.html">
                                    <img
                                      src="https://preview.colorlib.com/theme/callie/img/xhot-post-2.jpg.pagespeed.ic.Eub7HkhSvh.webp"
                                      alt=""
                                      data-pagespeed-url-hash="1948650177"
                                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    />
                                  </a>
                                  <div class="post-body">
                                    <div class="post-category">
                                      <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 class="post-title title-sm">
                                      <a href="blog-post.html">
                                        Mel ut impetus suscipit tincidunt. Cum
                                        id ullum laboramus persequeris.
                                      </a>
                                    </h3>
                                    <ul class="post-meta">
                                      <li>
                                        <a href="author.html">John Doe</a>
                                      </li>
                                      <li>20 April 2018</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="has-dropdown megamenu">
                  <a href="#">
                    Fashion <i class="fas fa-chevron-down"></i>
                  </a>
                  <div class="dropdown">
                    <div class="dropdown-body">
                      <div class="row">
                        <div class="col-md-3">
                          <h4 class="dropdown-heading">
                            Categories <i class="fas fa-chevron-down"></i>
                          </h4>
                          <ul class="dropdown-list">
                            <li>
                              <a href="#">Lifestyle</a>
                            </li>
                            <li>
                              <a href="#">Fashion</a>
                            </li>
                            <li>
                              <a href="#">Technology</a>
                            </li>
                            <li>
                              <a href="#">Health</a>
                            </li>
                            <li>
                              <a href="#">Travel</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-3">
                          <h4 class="dropdown-heading">Lifestyle</h4>
                          <ul class="dropdown-list">
                            <li>
                              <a href="#">Lifestyle</a>
                            </li>
                            <li>
                              <a href="#">Fashion</a>
                            </li>
                            <li>
                              <a href="#">Health</a>
                            </li>
                          </ul>
                          <h4 class="dropdown-heading">Technology</h4>
                          <ul class="dropdown-list">
                            <li>
                              <a href="#">Lifestyle</a>
                            </li>
                            <li>
                              <a href="#">Travel</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-3">
                          <h4 class="dropdown-heading">Fashion</h4>
                          <ul class="dropdown-list">
                            <li>
                              <a href="#">Fashion</a>
                            </li>
                            <li>
                              <a href="#">Technology</a>
                            </li>
                          </ul>
                          <h4 class="dropdown-heading">Travel</h4>
                          <ul class="dropdown-list">
                            <li>
                              <a href="#">Lifestyle</a>
                            </li>
                            <li>
                              <a href="#">Healtth</a>
                            </li>
                            <li>
                              <a href="#">Fashion</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-3">
                          <h4 class="dropdown-heading">Health</h4>
                          <ul class="dropdown-list">
                            <li>
                              <a href="#">Technology</a>
                            </li>
                            <li>
                              <a href="#">Fashion</a>
                            </li>
                            <li>
                              <a href="#">Health</a>
                            </li>
                            <li>
                              <a href="#">Travel</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Health</a>
                </li>
                <li>
                  <a href="#">Travel</a>
                </li>
              </ul>
            </div>
          </div>

          <div id="nav-aside">
            <ul class="nav-aside-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="has-dropdown">
                <a>
                  Categories{" "}
                  <i style={{ float: "right" }} class="fas fa-chevron-down"></i>
                </a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Health</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="contact.html">Contacts</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
            <button class="nav-close nav-aside-close">
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
