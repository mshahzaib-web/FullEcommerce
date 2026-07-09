export default function SocialAuthButtons() {
  const socialIcons = [
    { name: "Google", icon: "https://www.svgrepo.com/show/355037/google.svg" },
    {
      name: "Facebook",
      icon: "https://www.svgrepo.com/show/475647/facebook.svg",
    },
    { name: "Apple", icon: "https://www.svgrepo.com/show/475636/apple.svg" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {socialIcons.map((item) => (
        <button
          key={item.name}
          type="button"
          className="flex items-center justify-center py-2.5 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 active:scale-[0.98] transition duration-150 shadow-sm"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-4 h-4 object-contain"
          />
        </button>
      ))}
    </div>
  );
}
