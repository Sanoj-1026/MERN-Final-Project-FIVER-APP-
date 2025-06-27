import React from "react";

function Footer() {
  return (
    <div className="flex justify-center text-[#666] my-[50px]">
      <div className="w-[1400px] px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-y-10">
          {[
            {
              title: "Categories",
              items: [
                "Graphics & Design",
                "Digital Marketing",
                "Writing & Translation",
                "Video & Animation",
                "Music & Audio",
                "Programming & Tech",
                "Data",
                "Business",
                "Lifestyle",
                "Photography",
                "Sitemap",
              ],
            },
            {
              title: "About",
              items: [
                "Press & News",
                "Partnerships",
                "Privacy Policy",
                "Terms of Service",
                "Intellectual Property Claims",
                "Investor Relations",
                "Contact Sales",
              ],
            },
            {
              title: "Support",
              items: [
                "Help & Support",
                "Trust & Safety",
                "Selling on Liverr",
                "Buying on Liverr",
              ],
            },
            {
              title: "Community",
              items: [
                "Customer Success Stories",
                "Community hub",
                "Forum",
                "Events",
                "Blog",
                "Influencers",
                "Affiliates",
                "Podcast",
                "Invite a Friend",
                "Become a Seller",
                "Community Standards",
              ],
            },
            {
              title: "More From Fiverr",
              items: [
                "Liverr Business",
                "Liverr Pro",
                "Liverr Logo Maker",
                "Liverr Guides",
                "Get Inspired",
                "Liverr Select",
                "ClearVoice",
                "Liverr Workspace",
                "Learn",
                "Working Not Working",
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="flex flex-col gap-5 min-w-[150px]">
              <h2 className="text-[16px] text-[#555] font-semibold">{section.title}</h2>
              {section.items.map((item, i) => (
                <span key={i} className="font-light text-sm">{item}</span>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-[50px] border-t border-[#ebe9e9]" />

        {/* Bottom Section */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-5 whitespace-nowrap">
            <h2 className="text-xl font-bold text-black">liverr</h2>
            <span className="text-[13px]">© Liverr International Ltd. 2023</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 flex-wrap">
            {/* Social Icons */}
            <div className="flex gap-5">
              <img src="/img/twitter.png" alt="Twitter" className="w-6 h-6" />
              <img src="/img/facebook.png" alt="Facebook" className="w-6 h-6" />
              <img src="/img/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              <img src="/img/pinterest.png" alt="Pinterest" className="w-6 h-6" />
              <img src="/img/instagram.png" alt="Instagram" className="w-6 h-6" />
            </div>

            {/* Language */}
            <div className="flex items-center gap-2">
              <img src="/img/language.png" alt="Language" className="w-6 h-6" />
              <span>English</span>
            </div>

            {/* Currency */}
            <div className="flex items-center gap-2">
              <img src="/img/coin.png" alt="Currency" className="w-6 h-6" />
              <span>USD</span>
            </div>

            {/* Accessibility */}
            <img src="/img/accessibility.png" alt="Accessibility" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
