
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
import dinosaurData from './data/dinosaurs.json';
import VelociraptorImage from './images/velociraptor.png';
import TriceratopsImage from './images/Triceratop.jpg';
import TyrannosaurusImage from './images/Tyrannosaurus.jpg';

const DinoList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dietFilter, setDietFilter] = useState('all');
  const [periodFilter, setPeriodFilter] = useState('all');

  const dinos = useMemo(() => {
    const imageMap: { [key: string]: string } = {
      './images/velociraptor.png': VelociraptorImage,
      './images/Triceratop.jpg': TriceratopsImage,
      './images/Tyrannosaurus.jpg': TyrannosaurusImage,
    };

    return dinosaurData.dinosaurs.map(dino => ({
      ...dino,
      image: imageMap[dino.image] || dino.image
    }));
  }, []);

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
