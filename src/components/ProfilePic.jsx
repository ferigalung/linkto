
function ProfilePic() {
  return (
    <div className="flex flex-col items-center gap-2 min-w-full">
        <div id="profile-pic" className="rounded-full p-6 min-w-[100px] min-h-[100px] flex justify-center items-center text-3xl dark:border-stroke-color-dark-mode border border-stroke-color-light-mode"></div>
        <div className="font-normal text-base leading-6 dark:text-white text-black">@ferigalung</div>
    </div>
  )
}

export default ProfilePic