import userModel from "../models/userModels.js";

export const getUserData = async (req, res) => {
  try {

      const userId = req.userId;  // ✅ Comes from userAuth middleware



    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json({
        success: true,
        userData: {
            name: user.name,
            isAccountVerified: user.isAccountVerified
        }
    })
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
