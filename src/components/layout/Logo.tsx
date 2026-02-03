import React from 'react';

interface LogoProps {
    className?: string;
    inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-14 w-auto", inverted = false }) => {
    const primaryColor = "#E31E24"; // Industry Red
    const secondaryColor = inverted ? "#FFFFFF" : "#1A1A1A"; // Strong Dark or White

    return (
        <svg
            viewBox="0 0 400 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="xMinYMid meet"
        >
            {/* Branding Group */}
            <g transform="translate(0, 5)">
                {/* APAY */}
                <text
                    x="0"
                    y="50"
                    fill={secondaryColor}
                    style={{
                        font: '900 64px var(--font-archivo), sans-serif',
                        letterSpacing: '-1px'
                    }}
                >
                    APAY
                </text>
                {/* KAYIŞ */}
                <text
                    x="180"
                    y="50"
                    fill={primaryColor}
                    style={{
                        font: '900 64px var(--font-archivo), sans-serif',
                        letterSpacing: '-1px'
                    }}
                >
                    KAYIŞ
                </text>

                {/* Professional Accent Line */}
                <rect x="0" y="65" width="375" height="4" fill={primaryColor} />

                {/* Slogan with refined spacing */}
                <text
                    x="0"
                    y="90"
                    fill={inverted ? "#CCCCCC" : "#555555"}
                    style={{
                        font: '600 18px var(--font-geist-sans), sans-serif',
                        letterSpacing: '5px',
                        textTransform: 'uppercase'
                    }}
                >
                    ENDÜSTRİYEL GÜÇ AKTARMA
                </text>
            </g>
        </svg>
    );
};

export default Logo;
