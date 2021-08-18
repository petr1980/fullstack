import Member from "./Members.js";

class MemberService {
  async create(member) {
    return await Member.create(member);
  }

  async getAll() {
    return await Member.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    return await Member.findById(id);
  }

  async update(member) {
    if (!member._id) {
      throw new Error("id не указан");
    }
    return await Member.findByIdAndUpdate(member._id, member, {
      new: true,
    });
  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    return await Member.findByIdAndDelete(id);
  }
}

export default new MemberService();
