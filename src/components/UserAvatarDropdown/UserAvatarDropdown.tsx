import Image from "next/image";
import React from "react";

const UserAvatarDropdown = () => {
  return (
    <div className="flex items-center gap-5 relative">
      <div className="w-[70px] h-[70px] rounded-full overflow-hidden bg-shadow-primary/30 shrink-0">
        <Image src="/images/avatar.png" width={83} height={83} alt="Avatar" />
      </div>
      <h6 className="title_18 text-primary">
        <p>John</p>
        <p>Smith</p>
      </h6>

      <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-l from-shadow-primary to-white w-[400%] z-[-1]"></div>
    </div>
  );
};

export default UserAvatarDropdown;
