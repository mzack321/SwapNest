

const express = require("express");
const router = express.Router();

const Request = require("../models/Request");
const auth = require("../middleware/auth");

// SEND REQUEST

router.post(
  "/send-request",
  auth,
  async (req, res) => {

    try {

      const {
        senderId,
        ownerId,
        receiverName,
        productId
      } = req.body;

      const request =
        await Request.create({

          senderId,

          receiveId: ownerId,

          receiverName,

          productId,

          status: "pending"

        });

      res.json({

        success: true,

        request

      });

    } catch (err) {

      res.status(500).json(err);

    }

  }
);

// GET ALL REQUESTS

router.get(
  "/all-requests/:id",
  auth,
  async (req, res) => {

    try {

      const requests =
        await Request.find({

          $or: [

            {
              senderId:
              req.params.id
            },

            {
              receiveId:
              req.params.id
            }

          ]

        });

      res.json(requests);

    } catch (err) {

      res.status(500).json(err);

    }

  }
);

// ACCEPT / REJECT

router.put(
  "/update-request/:id",
  auth,
  async (req, res) => {

    try {

      const updatedRequest =
        await Request.findByIdAndUpdate(

          req.params.id,

          {
            status:
            req.body.status
          },

          {
            returnDocument: "after"
          }

        );

      res.json({

        success: true,

        updatedRequest

      });

    } catch (err) {

      res.status(500).json(err);

    }

  }
);

// CANCEL REQUEST

router.delete(
  "/cancel-request/:id",
  auth,
  async (req, res) => {

    try {

      await Request.findByIdAndDelete(
        req.params.id
      );

      res.json({

        success: true

      });

    } catch (err) {

      res.status(500).json(err);

    }

  }
);

module.exports = router;