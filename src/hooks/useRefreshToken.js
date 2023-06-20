import { useState, useEffect } from "react";
import axios from "axios";

const useRefreshToken = () => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await axios.post("refresh", {
          // Kirim refresh token ke server untuk mendapatkan token baru
          refreshToken: "refresh_token_here",
        });

        const newToken = response.data.token;

        // Simpan token baru ke dalam penyimpanan yang sesuai (misalnya, Cookies atau localStorage)
        // Contoh penggunaan Cookies:
        Cookies.set("token", newToken, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });

        // Set refreshing ke false setelah berhasil memperbarui token
        setRefreshing(false);
      } catch (error) {
        // Tangani error jika gagal memperbarui token
        console.log("Error refreshing token:", error);
        setRefreshing(false);
      }
    };

    // Panggil fungsi refresh token saat refreshing bernilai true
    if (refreshing) {
      refreshToken();
    }
  }, [refreshing]);

  const handleRefreshToken = () => {
    // Set refreshing ke true untuk memulai proses refresh token
    setRefreshing(true);
  };

  return handleRefreshToken;
};

export default useRefreshToken;
