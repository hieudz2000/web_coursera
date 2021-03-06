import "./cardBuyCourse.scss";
import "./scrollCardBuyCourse.js";

function showItems(itemsInfo) {
  return itemsInfo.map((item, index) => {
    return (
      <li className="nav-item icon-items" key={"BuyCourse" + index}>
        <a href="/" className="nav-link">
          <i className={item.classIcon}></i>
          <span className="details-information-course">
            {item.contentTitle}
            {item.content == null ? (
              <span></span>
            ) : (
              <span> : {item.content}</span>
            )}
          </span>
        </a>
      </li>
    );
  });
}
function CardBuyCourse() {
  var items = [
    {
      classIcon: "fas fa-clock",
      contentTitle: "Thời lượng",
      content: "5 giờ 15 phút",
    },
    {
      classIcon: "fas fa-play-circle ",
      contentTitle: "Giáo trình",
      content: "55 bài giảng",
    },
    {
      classIcon: "fas fa-history",
      contentTitle: "Sở hữu khoá học trọn đời",
      content: null,
    },
  ];

  return (
    <div className="card-buy-course position-absolute">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <div className="card-title-info">
              <span className="money-after-sale">
                299,000
                <sup>đ </sup>
              </span>
            </div>
            {/* <div className="sale-time mt-3 mb-3 icon-items">
              <i className="fas fa-tachometer-alt"></i>
              Thời gian ưu đãi còn 1 ngày
            </div> */}
            <div className="btn-add-card mt-2">
              <button type="button" className="btn btn-danger w-100 mb-1">
                ĐĂNG KÝ HỌC
              </button>
            </div>
            <p className="text-center text-muted mt-3">
              Hoàn tiền trong 7 ngày nếu không hài lòng
            </p>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <ul className="nav flex-column">{showItems(items)}</ul>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default CardBuyCourse;
