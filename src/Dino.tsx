import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ScaleIcon from "@mui/icons-material/Scale";
import HeightIcon from "@mui/icons-material/Height";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SpeedIcon from "@mui/icons-material/Speed";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CloseIcon from "@mui/icons-material/Close";

interface DinoInfo {
  name: string;
  period: string;
  diet: string;
  height: string;
  weight: string;
  description: string;
  image: string;
  habitat?: string;
  speed?: string;
  discovery?: string;
  funFacts?: string[];
}

interface DinoProps {
  dinoInfo: DinoInfo;
}

const Dino: React.FC<DinoProps> = ({ dinoInfo }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const getDietColor = (diet: string) => {
    return diet === 'Carnivore' ? 'error' : 'success';
  };

  const getPeriodColor = (period: string) => {
    if (period.includes('Jurassic')) return 'warning';
    if (period.includes('Cretaceous')) return 'info';
    return 'default';
  };

  // All additional details are now included in the dinoInfo prop from JSON

  return (
    <>
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

          <Box sx={{ flexGrow: 1, mb: 3 }}>
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

          <Button
            variant="outlined"
            onClick={() => setModalOpen(true)}
            sx={{
              mt: 'auto',
              borderColor: dinoInfo.diet === 'Carnivore' ? '#ff6b6b' : '#00b894',
              color: dinoInfo.diet === 'Carnivore' ? '#ff6b6b' : '#00b894',
              '&:hover': {
                borderColor: dinoInfo.diet === 'Carnivore' ? '#ee5a24' : '#00a085',
                backgroundColor: dinoInfo.diet === 'Carnivore' ? 'rgba(255, 107, 107, 0.1)' : 'rgba(0, 184, 148, 0.1)',
              },
              fontWeight: 600,
            }}
          >
            See More
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }
        }}
      >
        <DialogTitle sx={{ 
          pb: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: `linear-gradient(135deg, ${
            dinoInfo.diet === 'Carnivore' 
              ? 'rgba(255, 107, 107, 0.1), rgba(238, 90, 36, 0.1)' 
              : 'rgba(0, 184, 148, 0.1), rgba(0, 160, 133, 0.1)'
          })`,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#2c3e50' }}>
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
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{
              color: '#7f8c8d',
              '&:hover': {
                backgroundColor: 'rgba(127, 140, 141, 0.1)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4, pt: 4 }}>
            <Box sx={{ flex: { md: 1 }, display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src={dinoInfo.image}
                alt={`${dinoInfo.name} dinosaur`}
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 300,
                  objectFit: 'cover',
                  borderRadius: 3,
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
                }}
              />
            </Box>

            <Box sx={{ flex: { md: 1 } }}>
              <Box sx={{ mb: 3 }}>
                <Chip
                  icon={<RestaurantIcon />}
                  label={dinoInfo.diet}
                  color={getDietColor(dinoInfo.diet) as any}
                  variant="filled"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 3,
                    py: 1,
                    mb: 2,
                  }}
                />
              </Box>

              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
                About {dinoInfo.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  mb: 3,
                  color: '#34495e',
                }}
              >
                {dinoInfo.description}
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <HeightIcon sx={{ color: '#667eea' }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                      Height
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                      {dinoInfo.height}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ScaleIcon sx={{ color: '#f093fb' }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                      Weight
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                      {dinoInfo.weight}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ color: '#3498db' }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                      Habitat
                    </Typography>
                                         <Typography variant="body2" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                       {dinoInfo.habitat}
                     </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SpeedIcon sx={{ color: '#e74c3c' }} />
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                      Speed
                    </Typography>
                                         <Typography variant="body2" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                       {dinoInfo.speed}
                     </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
              <PsychologyIcon sx={{ color: '#9b59b6', mt: 0.2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                Discovery
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.7,
                color: '#34495e',
                pl: 3,
              }}
            >
                             {dinoInfo.discovery}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
              🦕 Fun Facts About {dinoInfo.name}
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                             {dinoInfo.funFacts?.map((fact: string, index: number) => (
                <Box
                  key={index}
                  sx={{
                    p: 3,
                    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(155, 89, 182, 0.1))',
                    borderRadius: 3,
                    border: '1px solid rgba(52, 152, 219, 0.2)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(52, 152, 219, 0.2)',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: '#2c3e50',
                      lineHeight: 1.6,
                    }}
                  >
                    • {fact}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            onClick={() => setModalOpen(false)}
            variant="contained"
            sx={{
              background: dinoInfo.diet === 'Carnivore' ? '#ff6b6b' : '#00b894',
              '&:hover': {
                background: dinoInfo.diet === 'Carnivore' ? '#ee5a24' : '#00a085',
              },
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dino;
