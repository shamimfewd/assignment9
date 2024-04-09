const Header = () => {
  return (
    <div className="mt-6">
      <div className="carousel">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://www.dealpath.com/wp-content/uploads/2021/07/types-of-commercial-real-estate-scaled-585x285px.png"
            className="w-full object-cover h-[90vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fe4f94c99-cd67-42c6-8f3c-7b1d127025ee.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
            className="w-full object-cover h-[90vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="
            https://www.vaned.com/blog/Are-you-considering-becoming-a-Commercial-Real-Estate-Broker/882337FD-91A9-4EF2-8C6F-78B2067CDE86.jpeg"
            className="w-full object-cover h-[90vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://www.vts.com/wp-content/uploads/2022/03/01.03.2022.TRB-Tools.png.webp"
            className="w-full object-cover h-[90vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
