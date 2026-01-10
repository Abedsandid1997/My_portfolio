const FloatingDots = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(150)].map((_, i) => (
        <div
          className={`absolute rounded-full opacity-60
                ${
                  i % 2 === 0
                    ? "w-1 h-1 bg-primary shadow-[0_0_10px_2px_var(--color-primary)]"
                    : "w-1.5 h-1.5 bg-muted-foreground shadow-[0_0_10px_2px_var(--color-muted-foreground)]"
                }
              `}
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${
              15 + Math.random() * 20
            }s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
