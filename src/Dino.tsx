import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ScaleIcon from "@mui/icons-material/Scale";
import HeightIcon from "@mui/icons-material/Height";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface DinoInfo {
  name: string;
  period: string;
  diet: string;
  height: string;
  weight: string;
  description: string;
  image: string;
}

interface DinoProps {
  dinoInfo: DinoInfo;
}

const Dino: React.FC<DinoProps> = ({ dinoInfo }) => {
  const getDietColor = (diet: string) => {
    return diet === 'Carnivore' ? 'error' : 'success';
  };

  const getPeriodColor = (period: string) => {
    if (period.includes('Jurassic')) return 'warning';
    if (period.includes('Cretaceous')) return 'info';
    return 'default';
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${
            dinoInfo.diet === 'Carnivore' 
              ? '#ff6b6b, #ee5a24' 
              : '#00b894, #00a085'
          })`,
        },
      }}
    >
      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Large Dinosaur Image */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 3,
          p: 2,
          background: `linear-gradient(135deg, ${
            dinoInfo.diet === 'Carnivore' 
              ? 'rgba(255, 107, 107, 0.1), rgba(238, 90, 36, 0.1)' 
              : 'rgba(0, 184, 148, 0.1), rgba(0, 160, 133, 0.1)'
          })`,
          borderRadius: 3,
          border: `2px solid ${
            dinoInfo.diet === 'Carnivore' 
              ? 'rgba(255, 107, 107, 0.3)' 
              : 'rgba(0, 184, 148, 0.3)'
          }`,
        }}>
          <Box
            component="img"
            src={dinoInfo.image}
            alt={`${dinoInfo.name} dinosaur`}
            onError={(e) => {
              // Fallback to emoji if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.innerHTML = dinoInfo.diet === 'Carnivore' ? '🦖' : '🦕';
              fallback.style.cssText = `
                font-size: 4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 200px;
                filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
                animation: float 3s ease-in-out infinite;
              `;
              target.parentNode?.appendChild(fallback);
            }}
            sx={{
              width: '100%',
              maxWidth: 300,
              height: 200,
              objectFit: 'cover',
              borderRadius: 2,
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
              animation: 'float 3s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': {
                  transform: 'translateY(0px)',
                },
                '50%': {
                  transform: 'translateY(-10px)',
                },
              },
            }}
          />
        </Box>

        {/* Header with Name and Period */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              color: '#2c3e50',
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            {dinoInfo.name}
          </Typography>
          <Chip
            icon={<AccessTimeIcon />}
            label={dinoInfo.period}
            color={getPeriodColor(dinoInfo.period) as any}
            size="small"
            sx={{ fontWeight: 500 }}
          />
        </Box>

        {/* Diet Badge */}
        <Box sx={{ mb: 3 }}>
          <Chip
            icon={<RestaurantIcon />}
            label={dinoInfo.diet}
            color={getDietColor(dinoInfo.diet) as any}
            variant="filled"
            sx={{
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 2,
              py: 1,
            }}
          />
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Stats Grid */}
        <Box sx={{ mb: 3 }}>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 40,
                }}
              >
                <HeightIcon />
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Height
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                  {dinoInfo.height}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 40,
                }}
              >
                <ScaleIcon />
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Weight
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                  {dinoInfo.weight}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Description */}
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
            <HistoryEduIcon 
              sx={{ 
                color: '#7f8c8d', 
                mt: 0.2,
                fontSize: '1.2rem',
              }} 
            />
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Description
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              fontSize: '0.9rem',
            }}
          >
            {dinoInfo.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Dino;
