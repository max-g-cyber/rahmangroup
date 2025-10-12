interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    // UPDATE: Switched background color to the correct maroon theme color
    <div className="bg-theme-primary py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          // UPDATE: Switched subtitle color to be based on the new beige theme
          <p className="mt-6 max-w-3xl text-xl text-theme-background/80">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}