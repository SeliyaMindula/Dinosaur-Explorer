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
            borderRadius: { xs: 0, sm: 3 },
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            margin: { xs: 0, sm: 2 },
            maxHeight: { xs: '100vh', sm: '90vh' },
            width: { xs: '100%', sm: 'auto' },
          }
        }}
      >
        <DialogTitle sx={{ 
          pb: { xs: 1, sm: 1 },
          px: { xs: 2, sm: 3 },
          pt: { xs: 2, sm: 3 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 },
          background: `linear-gradient(135deg, ${
            dinoInfo.diet === 'Carnivore' 
              ? 'rgba(255, 107, 107, 0.1), rgba(238, 90, 36, 0.1)' 
              : 'rgba(0, 184, 148, 0.1), rgba(0, 160, 133, 0.1)'
          })`,
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' },
            width: { xs: '100%', sm: 'auto' }
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                color: '#2c3e50',
                fontSize: { xs: '1.75rem', sm: '2.125rem' },
                lineHeight: { xs: 1.2, sm: 1.3 }
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
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{
              color: '#7f8c8d',
              position: { xs: 'absolute', sm: 'relative' },
              top: { xs: 8, sm: 'auto' },
              right: { xs: 8, sm: 'auto' },
              '&:hover': {
                backgroundColor: 'rgba(127, 140, 141, 0.1)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ 
          p: { xs: 2, sm: 4 },
          pt: { xs: 2, sm: 4 }
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: { xs: 3, sm: 4 }, 
            mb: { xs: 3, sm: 4 }, 
            pt: { xs: 2, sm: 4 }
          }}>
            <Box sx={{ 
              flex: { md: 1 }, 
              display: 'flex', 
              justifyContent: 'center',
              order: { xs: 1, md: 1 }
            }}>
              <Box
                component="img"
                src={dinoInfo.image}
                alt={`${dinoInfo.name} dinosaur`}
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: 400 },
                  height: { xs: 200, sm: 300 },
                  objectFit: 'cover',
                  borderRadius: { xs: 2, sm: 3 },
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
                }}
              />
            </Box>

            <Box sx={{ flex: { md: 1 }, order: { xs: 2, md: 2 } }}>
              <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                <Chip
                  icon={<RestaurantIcon />}
                  label={dinoInfo.diet}
                  color={getDietColor(dinoInfo.diet) as any}
                  variant="filled"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 0.5, sm: 1 },
                    mb: { xs: 1.5, sm: 2 },
                  }}
                />
              </Box>

              <Typography 
                variant="h6" 
                sx={{ 
                  mb: { xs: 1.5, sm: 2 }, 
                  fontWeight: 600, 
                  color: '#2c3e50',
                  fontSize: { xs: '1.125rem', sm: '1.25rem' }
                }}
              >
                About {dinoInfo.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  mb: { xs: 2, sm: 3 },
                  color: '#34495e',
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              >
                {dinoInfo.description}
              </Typography>

              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                gap: { xs: 1.5, sm: 2 }, 
                mb: { xs: 2, sm: 3 }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <HeightIcon sx={{ color: '#667eea', fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
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
                  <ScaleIcon sx={{ color: '#f093fb', fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
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
                  <LocationOnIcon sx={{ color: '#3498db', fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
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
                  <SpeedIcon sx={{ color: '#e74c3c', fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
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

          <Divider sx={{ mb: { xs: 3, sm: 4 } }} />

          <Box sx={{ mb: { xs: 3, sm: 4 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: { xs: 1.5, sm: 2 } }}>
              <PsychologyIcon sx={{ color: '#9b59b6', mt: 0.2, fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#2c3e50',
                  fontSize: { xs: '1.125rem', sm: '1.25rem' }
                }}
              >
                Discovery
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.7,
                color: '#34495e',
                pl: { xs: 2, sm: 3 },
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              {dinoInfo.discovery}
            </Typography>
          </Box>

          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: { xs: 2, sm: 3 }, 
                fontWeight: 600, 
                color: '#2c3e50',
                fontSize: { xs: '1.125rem', sm: '1.25rem' }
              }}
            >
              🦕 Fun Facts About {dinoInfo.name}
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
              gap: { xs: 1.5, sm: 2 }
            }}>
              {dinoInfo.funFacts?.map((fact: string, index: number) => (
                <Box
                  key={index}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(155, 89, 182, 0.1))',
                    borderRadius: { xs: 2, sm: 3 },
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
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    • {fact}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ 
          p: { xs: 2, sm: 3 }, 
          pt: 0,
          justifyContent: 'center'
        }}>
          <Button
            onClick={() => setModalOpen(false)}
            variant="contained"
            fullWidth={false}
            sx={{
              background: dinoInfo.diet === 'Carnivore' ? '#ff6b6b' : '#00b894',
              '&:hover': {
                background: dinoInfo.diet === 'Carnivore' ? '#ee5a24' : '#00a085',
              },
              fontWeight: 600,
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              borderRadius: 2,
              minWidth: { xs: '120px', sm: '140px' }
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
