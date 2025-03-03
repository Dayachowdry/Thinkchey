import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const FormCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}30;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}30;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}30;
  }
`;

const OptionsList = styled.div`
  margin-top: 1.5rem;
`;

const OptionItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const AddOptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const RemoveOptionButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.danger};
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FormHelp = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const FormError = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.danger};
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.75rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 1rem;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const categories = [
  'Politics',
  'Crypto',
  'Sports',
  'Science & Tech',
  'Entertainment',
  'Economics',
  'Other',
];

const resolutionTypes = ['Yes/No', 'Multiple Choice'];

const CreateMarketPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    resolutionType: 'Yes/No',
    endDate: '',
    resolutionDetails: '',
    options: resolutionTypes[0] === 'Multiple Choice' ? [{ text: '' }, { text: '' }] : [],
    initialLiquidity: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'resolutionType') {
      // Reset options if changing resolution type
      setFormData({
        ...formData,
        [name]: value,
        options: value === 'Multiple Choice' ? [{ text: '' }, { text: '' }] : [],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index].text = value;

    setFormData({
      ...formData,
      options: newOptions,
    });

    // Clear option errors
    if (errors.options) {
      setErrors({
        ...errors,
        options: '',
      });
    }
  };

  const addOption = () => {
    setFormData({
      ...formData,
      options: [...formData.options, { text: '' }],
    });
  };

  const removeOption = index => {
    const newOptions = [...formData.options];
    newOptions.splice(index, 1);

    setFormData({
      ...formData,
      options: newOptions,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.endDate) {
      newErrors.endDate = 'End date is required';
    } else {
      // Check if end date is in the future
      const selectedDate = new Date(formData.endDate);
      const currentDate = new Date();

      if (selectedDate <= currentDate) {
        newErrors.endDate = 'End date must be in the future';
      }
    }

    if (!formData.resolutionDetails.trim()) {
      newErrors.resolutionDetails = 'Resolution details are required';
    }

    if (formData.resolutionType === 'Multiple Choice') {
      // Check if we have at least 2 options and none are empty
      if (formData.options.length < 2) {
        newErrors.options = 'At least 2 options are required';
      } else if (formData.options.some(option => !option.text.trim())) {
        newErrors.options = 'All options must have text';
      }
    }

    if (!formData.initialLiquidity.trim()) {
      newErrors.initialLiquidity = 'Initial liquidity is required';
    } else if (isNaN(Number(formData.initialLiquidity)) || Number(formData.initialLiquidity) <= 0) {
      newErrors.initialLiquidity = 'Initial liquidity must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, this would create the market
      console.log('Creating market:', formData);

      // Show success message and redirect
      alert('Market created successfully!');
      navigate('/explore');
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All form data will be lost.')) {
      navigate('/explore');
    }
  };

  return (
    <PageContainer>
      <PageTitle>Create a New Market</PageTitle>
      <PageDescription>
        Create a prediction market for others to trade on. You'll need to provide liquidity to
        bootstrap the market.
      </PageDescription>

      <form onSubmit={handleSubmit}>
        <FormCard>
          <FormSection>
            <SectionTitle>Basic Information</SectionTitle>

            <FormGroup>
              <FormLabel htmlFor="title">Market Question *</FormLabel>
              <FormInput
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Will Bitcoin reach $100k by the end of 2025?"
              />
              {errors.title && <FormError>{errors.title}</FormError>}
              <FormHelp>
                Frame your question clearly. It should have a definitive answer by the end date.
              </FormHelp>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="description">Market Description *</FormLabel>
              <FormTextarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide details about this market..."
              />
              {errors.description && <FormError>{errors.description}</FormError>}
              <FormHelp>
                Describe the market in detail, including what it predicts and any relevant context.
              </FormHelp>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="category">Category *</FormLabel>
              <FormSelect
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </FormSelect>
              {errors.category && <FormError>{errors.category}</FormError>}
            </FormGroup>
          </FormSection>
        </FormCard>

        <FormCard>
          <FormSection>
            <SectionTitle>Resolution Details</SectionTitle>

            <FormGroup>
              <FormLabel htmlFor="resolutionType">Resolution Type *</FormLabel>
              <FormSelect
                id="resolutionType"
                name="resolutionType"
                value={formData.resolutionType}
                onChange={handleChange}
              >
                {resolutionTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </FormSelect>
              <FormHelp>
                Yes/No markets have two possible outcomes. Multiple Choice markets can have two or
                more outcomes.
              </FormHelp>
            </FormGroup>

            {formData.resolutionType === 'Multiple Choice' && (
              <FormGroup>
                <FormLabel>Possible Outcomes *</FormLabel>
                <OptionsList>
                  {formData.options.map((option, index) => (
                    <OptionItem key={index}>
                      <FormInput
                        value={option.text}
                        onChange={e => handleOptionChange(index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                      />
                      {formData.options.length > 2 && (
                        <RemoveOptionButton type="button" onClick={() => removeOption(index)}>
                          Remove
                        </RemoveOptionButton>
                      )}
                    </OptionItem>
                  ))}
                </OptionsList>
                {errors.options && <FormError>{errors.options}</FormError>}
                <AddOptionButton type="button" onClick={addOption}>
                  + Add Another Option
                </AddOptionButton>
              </FormGroup>
            )}

            <FormGroup>
              <FormLabel htmlFor="endDate">End Date *</FormLabel>
              <FormInput
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]} // Set min date to today
              />
              {errors.endDate && <FormError>{errors.endDate}</FormError>}
              <FormHelp>The market will close for trading on this date.</FormHelp>
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="resolutionDetails">Resolution Details *</FormLabel>
              <FormTextarea
                id="resolutionDetails"
                name="resolutionDetails"
                value={formData.resolutionDetails}
                onChange={handleChange}
                placeholder="Explain how this market will be resolved..."
              />
              {errors.resolutionDetails && <FormError>{errors.resolutionDetails}</FormError>}
              <FormHelp>
                Specify the exact conditions under which this market will resolve, including sources
                of truth.
              </FormHelp>
            </FormGroup>
          </FormSection>
        </FormCard>

        <FormCard>
          <FormSection>
            <SectionTitle>Market Liquidity</SectionTitle>

            <FormGroup>
              <FormLabel htmlFor="initialLiquidity">Initial Liquidity (USD) *</FormLabel>
              <FormInput
                id="initialLiquidity"
                name="initialLiquidity"
                type="text"
                value={formData.initialLiquidity}
                onChange={handleChange}
                placeholder="e.g., 100"
              />
              {errors.initialLiquidity && <FormError>{errors.initialLiquidity}</FormError>}
              <FormHelp>
                The amount of funds you'll provide as initial liquidity. Higher liquidity generally
                results in better trading conditions.
              </FormHelp>
            </FormGroup>
          </FormSection>
        </FormCard>

        <ButtonContainer>
          <CancelButton type="button" onClick={handleCancel}>
            Cancel
          </CancelButton>
          <SubmitButton type="submit">Create Market</SubmitButton>
        </ButtonContainer>
      </form>
    </PageContainer>
  );
};

export default CreateMarketPage;
