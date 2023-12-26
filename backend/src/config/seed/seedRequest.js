import Request from "../../models/request/Request.js";

export default async function seedRequest() {
  const requests = [
    {
      title: "Sửa chữa cửa kính tầng 5",
      description: "Cửa kính tầng 5 bị hỏng, cần sửa chữa ngay",
      response: "Đã gửi kỹ thuật viên đến sửa chữa, vui lòng kiên nhẫn chờ đợi",
      status: "Chấp nhận",
      UserId: 6,
      StaffId: 1,
    },
    {
      title: "Lắp đặt camera an ninh",
      description: "Yêu cầu lắp đặt camera an ninh ở lối vào tòa nhà",
      response: "Đã tiếp nhận yêu cầu, dự kiến triển khai trong 3 ngày",
      status: "Chấp nhận",
      UserId: 12,
      StaffId: 4,
    },
    {
      title: "Yêu cầu thông báo cắt điện",
      description:
        "Cần thông báo trước khi cắt điện để công việc sinh hoạt hàng ngày không bị ảnh hưởng",
      response:
        "Đã ghi nhận yêu cầu, thông báo trước 24 giờ khi có kế hoạch cắt điện",
      status: "Chấp nhận",
      UserId: 9,
      StaffId: 1,
    },
    {
      title: "Báo lỗi thang máy",
      description:
        "Thang máy tầng 3 gặp sự cố, cần kỹ thuật viên kiểm tra và sửa chữa",
      response:
        "Kỹ thuật viên đang tiến hành kiểm tra và sửa chữa. Mong quý cư dân thông cảm",
      status: "Chấp nhận",
      UserId: 7,
      StaffId: 4,
    },
    {
      title: "Yêu cầu vệ sinh khu vực chung cư",
      description: "Khu vực sảnh chung cư cần được vệ sinh sạch sẽ",
      response:
        "Đã sắp xếp đội ngũ làm vệ sinh, dự kiến hoàn thành trong tuần này",
      status: "Chấp nhận",
      UserId: 11,
      StaffId: 1,
    },
    {
      title: "Kiểm tra đèn đường dẫn vào chung cư",
      description:
        "Đèn đường dẫn vào chung cư không sáng, cần kiểm tra và thay thế đèn hỏng",
      response:
        "Kỹ thuật viên sẽ kiểm tra và thay thế đèn hỏng ngay trong ngày hôm nay",
      status: "Chấp nhận",
      UserId: 5,
      StaffId: 4,
    },
    {
      title: "Mất mát đồ cá nhân",
      description: "Mất ví ở khu vực sảnh, mong nhận lại nếu ai đó tìm thấy",
      response:
        "Đã kiểm tra camera an ninh, hiện chưa có thông tin. Chúng tôi sẽ tiếp tục theo dõi",
      status: "Chấp nhận",
      UserId: 14,
      StaffId: 1,
    },
    {
      title: "Yêu cầu sửa chữa cổng ra vào",
      description: "Cổng ra vào chung cư bị hỏng, cần sửa chữa ngay",
      response:
        "Kỹ thuật viên đang làm việc để khắc phục sự cố. Xin quý cư dân thông cảm",
      status: "Chấp nhận",
      UserId: 8,
      StaffId: 4,
    },
    {
      title: "Báo mất nước nóng",
      description:
        "Không có nước nóng trong phòng tắm, cần kỹ thuật viên kiểm tra",
      response:
        "Đã gửi kỹ thuật viên đến kiểm tra, mong quý cư dân kiên nhẫn chờ đợi",
      status: "Chấp nhận",
      UserId: 15,
      StaffId: 1,
    },
    {
      title: "Yêu cầu sửa chữa máy lạnh",
      description:
        "Máy lạnh trong phòng không hoạt động, cần kỹ thuật viên đến kiểm tra",
      response:
        "Kỹ thuật viên sẽ kiểm tra và sửa chữa máy lạnh ngay trong ngày hôm nay",
      status: "Chấp nhận",
      UserId: 10,
      StaffId: 4,
    },
    {
      title: "Kiểm tra an ninh tầng hầm",
      description:
        "Yêu cầu kiểm tra camera an ninh ở tầng hầm để đảm bảo an toàn",
      response:
        "Đã kiểm tra và bảo đảm an ninh tốt. Xin cảm ơn sự quan tâm của quý cư dân",
      status: "Chấp nhận",
      UserId: 13,
      StaffId: 1,
    },
    {
      title: "Yêu cầu làm mới bảng thông báo",
      description: "Bảng thông báo ở khu vực lễ tân cần được làm mới",
      response:
        "Chúng tôi sẽ cập nhật bảng thông báo ngay trong tuần này. Xin lưu ý theo dõi thông báo",
      status: "Chấp nhận",
      UserId: 16,
      StaffId: 4,
    },
    {
      title: "Yêu cầu tư vấn lắp đặt Internet",
      description: "Cần tư vấn và hỗ trợ lắp đặt Internet cho hộ gia đình",
      response:
        "Đã liên hệ nhà cung cấp dịch vụ Internet và sẽ có nhân viên hỗ trợ sớm nhất có thể",
      status: "Chấp nhận",
      UserId: 3,
      StaffId: 1,
    },
    {
      title: "Yêu cầu làm mới cửa chính",
      description: "Cửa chính chung cư cần được làm mới do đã cũ",
      response:
        "Chúng tôi sẽ tiến hành làm mới cửa chính trong thời gian sớm nhất. Xin quý cư dân thông cảm",
      status: "Chấp nhận",
      UserId: 2,
      StaffId: 4,
    },
    {
      title: "Báo mất chìa khóa",
      description: "Mất chìa khóa ở khu vực gửi xe, mong tìm thấy lại",
      response:
        "Chúng tôi sẽ kiểm tra camera an ninh và thông báo ngay khi có thông tin. Xin quý cư dân giữ bình tĩnh",
      status: "Chấp nhận",
      UserId: 1,
      StaffId: 1,
    },
    {
      title: "Yêu cầu kiểm tra hệ thống nước",
      description: "Nước sinh hoạt có mùi khá lạ, cần kiểm tra hệ thống",
      response:
        "Đã gửi kỹ thuật viên đến kiểm tra. Xin quý cư dân kiên nhẫn đợi kết quả",
      status: "Chấp nhận",
      UserId: 17,
      StaffId: 4,
    },
    {
      title: "Yêu cầu sửa chữa cầu thang máy",
      description: "Cầu thang máy tầng 2 bị hỏng, cần sửa chữa ngay",
      response:
        "Kỹ thuật viên sẽ kiểm tra và sửa chữa cầu thang máy ngay trong ngày hôm nay",
      status: "Chấp nhận",
      UserId: 6,
      StaffId: 1,
    },
    {
      title: "Yêu cầu kiểm tra cổng an ninh",
      description:
        "Cổng an ninh chung cư không đóng mở được, cần kiểm tra và sửa chữa",
      response:
        "Đã gửi kỹ thuật viên đến kiểm tra và sửa chữa. Xin quý cư dân thông cảm",
      status: "Chấp nhận",
      UserId: 12,
      StaffId: 4,
    },
    {
      title: "Báo lỗi thang máy",
      description:
        "Thang máy tầng 4 gặp sự cố, cần kỹ thuật viên kiểm tra và sửa chữa",
      response:
        "Kỹ thuật viên đang tiến hành kiểm tra và sửa chữa. Mong quý cư dân thông cảm",
      status: "Chấp nhận",
      UserId: 9,
      StaffId: 1,
    },
    {
      title: "Yêu cầu thông báo cắt điện",
      description:
        "Cần thông báo trước khi cắt điện để công việc sinh hoạt hàng ngày không bị ảnh hưởng",
      response:
        "Đã ghi nhận yêu cầu, thông báo trước 24 giờ khi có kế hoạch cắt điện",
      status: "Chấp nhận",
      UserId: 7,
      StaffId: 4,
    },
    {
      title: "Yêu cầu vệ sinh khu vực chung cư",
      description: "Khu vực sảnh chung cư cần được vệ sinh sạch sẽ",
      response:
        "Đã sắp xếp đội ngũ làm vệ sinh, dự kiến hoàn thành trong tuần này",
      status: "Chấp nhận",
      UserId: 11,
      StaffId: 1,
    },
    {
      title: "Kiểm tra đèn đường dẫn vào chung cư",
      description:
        "Đèn đường dẫn vào chung cư không sáng, cần kiểm tra và thay thế đèn hỏng",
      response:
        "Kỹ thuật viên sẽ kiểm tra và thay thế đèn hỏng ngay trong ngày hôm nay",
      status: "Chấp nhận",
      UserId: 5,
      StaffId: 4,
    },
    {
      title: "Mất mát đồ cá nhân",
      description: "Mất ví ở khu vực sảnh, mong nhận lại nếu ai đó tìm thấy",
      response:
        "Đã kiểm tra camera an ninh, hiện chưa có thông tin. Chúng tôi sẽ tiếp tục theo dõi",
      status: "Chấp nhận",
      UserId: 14,
      StaffId: 1,
    },
    {
      title: "Yêu cầu sửa chữa cổng ra vào",
      description: "Cổng ra vào chung cư bị hỏng, cần sửa chữa ngay",
      response:
        "Kỹ thuật viên đang làm việc để khắc phục sự cố. Xin quý cư dân thông cảm",
      status: "Chấp nhận",
      UserId: 8,
      StaffId: 4,
    },

    {
      title: "Yêu cầu bảo dưỡng hệ thống thang máy",
      description: "Cần bảo dưỡng định kỳ hệ thống thang máy để tránh sự cố",
      response: null,
      UserId: 3,
      StaffId: null,
    },
    {
      title: "Kiểm tra và làm mới hệ thống đèn chiếu sáng",
      description:
        "Đèn chiếu sáng khu vực chung cư cần được kiểm tra và làm mới",
      response: null,
      UserId: 15,
      StaffId: null,
    },
    {
      title: "Yêu cầu kiểm tra kỹ thuật hệ thống cảm biến cửa",
      description:
        "Cảm biến cửa tầng 2 không hoạt động, cần kiểm tra và sửa chữa",
      response: null,
      UserId: 16,
      StaffId: null,
    },
    {
      title: "Yêu cầu mua sắm và lắp đặt thêm camera an ninh",
      description: "Cần mua thêm và lắp đặt camera an ninh ở khu vực còn trống",
      response: null,
      UserId: 1,
      StaffId: null,
    },
    {
      title: "Yêu cầu làm mới cổng chung cư",
      description: "Cổng chung cư cần được làm mới để tăng tính an ninh",
      response: null,
      UserId: 17,
      StaffId: null,
    },
    {
      title: "Yêu cầu kiểm tra và sửa chữa cổng an ninh",
      description:
        "Cổng an ninh chung cư không đóng mở được, cần kiểm tra và sửa chữa",
      response: null,
      UserId: 2,
      StaffId: null,
    },
    {
      title: "Yêu cầu kiểm tra và làm mới bảng thông báo",
      description:
        "Bảng thông báo cần được kiểm tra và làm mới để thông tin được cập nhật",
      response: null,
      UserId: 7,
      StaffId: null,
    },
    {
      title: "Yêu cầu sửa chữa hệ thống cấp nước",
      description: "Nước sinh hoạt chung cư bị rò rỉ, cần sửa chữa ngay",
      response: null,
      UserId: 10,
      StaffId: null,
    },
    {
      title: "Yêu cầu mua sắm và lắp đặt thêm camera giám sát",
      description: "Cần mua thêm camera giám sát ở khu vực chưa được cover",
      response: null,
      UserId: 13,
      StaffId: null,
    },
    {
      title: "Kiểm tra và sửa chữa hệ thống cửa tự động",
      description:
        "Hệ thống cửa tự động chưa hoạt động đúng, cần kiểm tra và sửa chữa",
      response: null,
      UserId: 5,
      StaffId: null,
    },
    {
      title: "Yêu cầu làm mới khu vực sảnh",
      description:
        "Khu vực sảnh chung cư cần được làm mới để tạo ấn tượng cho cư dân",
      response: null,
      UserId: 8,
      StaffId: null,
    },
    {
      title: "Yêu cầu sửa chữa hệ thống máy lạnh chung cư",
      description: "Máy lạnh chung cư không hoạt động đúng, cần sửa chữa ngay",
      response: null,
      UserId: 11,
      StaffId: null,
    },
    {
      title: "Yêu cầu kiểm tra và làm mới hệ thống đèn chiếu sáng",
      description:
        "Đèn chiếu sáng khu vực chung cư cần được kiểm tra và làm mới",
      response: null,
      UserId: 14,
      StaffId: null,
    },
    {
      title: "Yêu cầu kiểm tra và sửa chữa hệ thống cửa tự động",
      description:
        "Hệ thống cửa tự động chưa hoạt động đúng, cần kiểm tra và sửa chữa",
      response: null,
      UserId: 6,
      StaffId: null,
    },
    {
      title: "Yêu cầu kiểm tra và làm mới bảng thông báo",
      description:
        "Bảng thông báo cần được kiểm tra và làm mới để thông tin được cập nhật",
      response: null,
      UserId: 9,
      StaffId: null,
    },
    {
      title: "Yêu cầu sửa chữa hệ thống máy lạnh chung cư",
      description: "Máy lạnh chung cư không hoạt động đúng, cần sửa chữa ngay",
      response: null,
      UserId: 12,
      StaffId: null,
    },
    {
      title: "Yêu cầu mua sắm và lắp đặt thêm camera giám sát",
      description: "Cần mua thêm camera giám sát ở khu vực chưa được cover",
      response: null,
      UserId: 15,
      StaffId: null,
    },
    {
      title: "Kiểm tra và làm mới hệ thống đèn chiếu sáng",
      description:
        "Đèn chiếu sáng khu vực chung cư cần được kiểm tra và làm mới",
      response: null,
      UserId: 1,
      StaffId: null,
    },
    {
      title: "Yêu cầu kiểm tra kỹ thuật hệ thống cảm biến cửa",
      description:
        "Cảm biến cửa tầng 2 không hoạt động, cần kiểm tra và sửa chữa",
      response: null,
      UserId: 7,
      StaffId: null,
    },
    {
      title: "Yêu cầu mua sắm và lắp đặt thêm camera an ninh",
      description: "Cần mua thêm và lắp đặt camera an ninh ở khu vực còn trống",
      response: null,
      UserId: 10,
      StaffId: null,
    },
  ];

  for (let request of requests) {
    await Request.create(request);
  }
}
