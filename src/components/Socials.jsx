import SocialLink from "./SocialLink"
function Socials() {
  return (
    <div className="flex justify-center items-center gap-4 p-6 min-w-full mt-6">
        <SocialLink media="twitter" link="https://twitter.com/ferigalung" />
        <SocialLink media="instagram" link="https://instagram.com/ferigalung.dev" />
        <SocialLink media="github" link="https://github.com/ferigalung" />
        <SocialLink media="linkedin" link="https://linkedin.com/ferigalung" />
    </div>
  )
}

export default Socials