
function ProfilePic() {
  return (
    <div className="flex flex-col items-center p-6 gap-2 min-w-full">
        <div id="profile-pic" className="rounded-full p-6 text-white min-w-[100px] min-h-[100px] flex justify-center items-center text-3xl border-stroke-color-dark-mode border"></div>
        <div className="font-medium text-base leading-6 text-white">@ferigalung</div>
    </div>
  )
}

export default ProfilePic