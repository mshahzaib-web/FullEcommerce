const SocialAuthButtons = () => {
  const providers = [
    { name: "Google", icon: "https://www.svgrepo.com/show/355037/google.svg" },
    {
      name: "Facebook",
      icon: "https://www.svgrepo.com/show/475647/facebook.svg",
    },
    { name: "Apple", icon: "https://www.svgrepo.com/show/475636/apple.svg" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          className="flex items-center justify-center gap-2 py-2.5 px-3 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200 shadow-sm"
        >
          <img
            src={provider.icon}
            alt={provider.name}
            className="w-4 h-4 object-contain"
          />
          <span>{provider.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialAuthButtons;
