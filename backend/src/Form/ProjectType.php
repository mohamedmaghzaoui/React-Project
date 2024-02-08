<?php
namespace App\Form;

use App\Entity\Project;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Project Name',
            ])
            ->add('description', TextType::class, [
                'label' => 'Description',
            ])
            ->add('image', FileType::class, [
                'label' => 'Project Image',
                'mapped' => false, // This means that this field is not directly bound to an entity property
                'required' => false, // It's not required because you handle file upload manually in the controller
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Project::class,
        ]);
    }
}
