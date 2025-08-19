import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
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
        {/* Header with Avatar and Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              fontSize: '2rem',
              mr: 2,
              background: `linear-gradient(135deg, ${
                dinoInfo.diet === 'Carnivore' 
                  ? '#ff6b6b, #ee5a24' 
                  : '#00b894, #00a085'
              })`,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          >
            {dinoInfo.image}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                color: '#2c3e50',
                lineHeight: 1.2,
                mb: 0.5,
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
