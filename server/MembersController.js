import Member from "./Members.js";
import MemberService from "./services/MemberService.js";

class MembersController {
  async create(req, res) {
    try {
      const createdMember = await MemberService.create(req.body, req.files.photo);
      res.json(createdMember);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const members = await MemberService.getAll();
      res.json(members);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
      const member = await MemberService.getOne(req.params.id);

      res.json(member);
    } catch (error) {
      if (error.name === "CastError") {
        res.status(400).json({ message: "Member not found" });
      }
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const updatedMember = await MemberService.update(req.body);

      res.json(updatedMember);
    } catch (error) {
      if (error.name === "CastError") {
        res.status(400).json(error.message);
      }

      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
      const deletedMember = await MemberService.delete(req.params.id);

      res.json(deletedMember);
    } catch (error) {
      if (error.name === "CastError") {
        res.status(400).json({ message: "Member not found" });
      }

      res.status(500).json(error);
    }
  }
}

export default new MembersController();
