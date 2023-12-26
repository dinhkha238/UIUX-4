import Request from "../models/request/Request.js";

import User from "../models/user/User.js";

import Apartment from "../models/building/Apartment.js";
import Building from "../models/building/Building.js";
import UserInfo from "../models/user/UserInfo.js";

const RequestService = {
  getRequests: async () => {
    const result = await Request.findAll({
      include: [
        {
          model: User,
          as: "User",
          include: [
            {
              model: UserInfo,
              include: [
                {
                  model: Apartment,
                  include: [Building],
                },
              ],
            },
          ],
        },
        { model: User, as: "Staff" },
      ],
    });

    return result;
  },

  getRequestsByUserId: async (userId) => {
    const result = await Request.findAll({
      include: [
        {
          model: User,
          as: "User",
          include: [
            {
              model: UserInfo,
              include: [
                {
                  model: Apartment,
                  include: [Building],
                },
              ],
            },
          ],
        },
        { model: User, as: "Staff" },
      ],
      where: {
        UserId: userId,
      },
    });

    return result;
  },

  createRequest: async (request) => {
    const result = await Request.create(request);

    return result;
  },

  updateRequest: async (request) => {
    const requestInstance = await Request.findByPk(request.id);

    return await requestInstance.update(request);
  },
};

export default RequestService;
