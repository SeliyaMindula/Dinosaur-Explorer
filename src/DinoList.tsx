
import React, { useState, useMemo } from 'react';
import Dino from './Dino';
import { 
  Box, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Typography,
  Paper,
  InputAdornment,
  Chip,
  Stack
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import VelociraptorImage from './images/velociraptor.png';

const DinoList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dietFilter, setDietFilter] = useState('all');
  const [periodFilter, setPeriodFilter] = useState('all');

  const dinos = useMemo(() => [
    {
      name: 'Velociraptor',
      period: 'Late Cretaceous',
      diet: 'Carnivore',
      height: '2 feet',
      weight: '33 pounds',
      description: 'Velociraptor is a genus of dromaeosaurid theropod dinosaur that lived approximately 75 to 71 million years ago during the latter part of the Cretaceous Period.',
      image: VelociraptorImage,
    },
    {
      name: 'Triceratops',
      period: 'Late Cretaceous',
      diet: 'Herbivore',
      height: '9.8 feet',
      weight: '26,000 pounds',
      description: 'Triceratops is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period, about 68 million years ago in what is now North America.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    },
    {
        name: 'Tyrannosaurus Rex',
        period: 'Late Cretaceous',
        diet: 'Carnivore',
        height: '20 feet',
        weight: '15,500 pounds',
        description: 'Tyrannosaurus is a genus of large theropod dinosaur. The species Tyrannosaurus rex, often called T. rex or colloquially T-Rex, is one of the best represented of these large theropods.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
      },
    {
      name: 'Stegosaurus',
      period: 'Late Jurassic',
      diet: 'Herbivore',
      height: '14 feet',
      weight: '5,000 pounds',
      description: 'Stegosaurus is a genus of herbivorous, four-legged, armored dinosaur from the Late Jurassic, characterized by the distinctive kite-shaped upright plates along their backs and spikes on their tails.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    },
    {
      name: 'Brachiosaurus',
      period: 'Late Jurassic',
      diet: 'Herbivore',
      height: '50 feet',
      weight: '88,000 pounds',
      description: 'Brachiosaurus is a genus of sauropod dinosaur that lived in North America during the Late Jurassic, about 154–153 million years ago. It was one of the tallest and largest dinosaurs.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    },
    {
      name: 'Spinosaurus',
      period: 'Early Cretaceous',
      diet: 'Carnivore',
      height: '23 feet',
      weight: '20,000 pounds',
      description: 'Spinosaurus is a genus of spinosaurid dinosaur that lived in what now is North Africa during the Cenomanian to upper Turonian stages of the Late Cretaceous period, about 99 to 93.5 million years ago.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
    }
  ], []);

  // Filter and search logic
  const filteredDinos = useMemo(() => {
    return dinos.filter(dino => {
      const matchesSearch = dino.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dino.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDiet = dietFilter === 'all' || dino.diet === dietFilter;
      const matchesPeriod = periodFilter === 'all' || dino.period === periodFilter;
      
      return matchesSearch && matchesDiet && matchesPeriod;
    });
  }, [dinos, searchTerm, dietFilter, periodFilter]);

  const uniquePeriods = Array.from(new Set(dinos.map(dino => dino.period)));
  const uniqueDiets = Array.from(new Set(dinos.map(dino => dino.diet)));

  return (
    <Box sx={{ py: 4 }}>
      {/* Search and Filter Section */}
      <Paper
        sx={{
          p: 3,
          mb: 4,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#2c3e50' }}>
          <FilterListIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Search & Filter
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          <Box sx={{ flex: { md: 2 } }}>
            <TextField
              fullWidth
              label="Search dinosaurs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
          </Box>
          
          <Box sx={{ flex: { md: 1 } }}>
            <FormControl fullWidth>
              <InputLabel>Diet</InputLabel>
              <Select
                value={dietFilter}
                label="Diet"
                onChange={(e) => setDietFilter(e.target.value)}
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="all">All Diets</MenuItem>
                {uniqueDiets.map(diet => (
                  <MenuItem key={diet} value={diet}>
                    {diet}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          
          <Box sx={{ flex: { md: 1 } }}>
            <FormControl fullWidth>
              <InputLabel>Period</InputLabel>
              <Select
                value={periodFilter}
                label="Period"
                onChange={(e) => setPeriodFilter(e.target.value)}
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="all">All Periods</MenuItem>
                {uniquePeriods.map(period => (
                  <MenuItem key={period} value={period}>
                    {period}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Active Filters Display */}
        {(searchTerm || dietFilter !== 'all' || periodFilter !== 'all') && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Active filters:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {searchTerm && (
                <Chip
                  label={`Search: "${searchTerm}"`}
                  onDelete={() => setSearchTerm('')}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              )}
              {dietFilter !== 'all' && (
                <Chip
                  label={`Diet: ${dietFilter}`}
                  onDelete={() => setDietFilter('all')}
                  color="secondary"
                  variant="outlined"
                  size="small"
                />
              )}
              {periodFilter !== 'all' && (
                <Chip
                  label={`Period: ${periodFilter}`}
                  onDelete={() => setPeriodFilter('all')}
                  color="info"
                  variant="outlined"
                  size="small"
                />
              )}
            </Stack>
          </Box>
        )}
      </Paper>

      {/* Results Count */}
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="white" sx={{ fontWeight: 500 }}>
          {filteredDinos.length} dinosaur{filteredDinos.length !== 1 ? 's' : ''} found
        </Typography>
      </Box>

      {/* Dinosaur Grid */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { 
          xs: '1fr', 
          sm: 'repeat(2, 1fr)', 
          md: 'repeat(3, 1fr)' 
        }, 
        gap: 4,
        justifyContent: 'center'
      }}>
        {filteredDinos.map((dino, index) => (
          <Box key={index}>
            <Dino dinoInfo={dino} />
          </Box>
        ))}
      </Box>

      {/* No Results Message */}
      {filteredDinos.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5" color="white" sx={{ mb: 2 }}>
            No dinosaurs found
          </Typography>
          <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
            Try adjusting your search terms or filters
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DinoList;
