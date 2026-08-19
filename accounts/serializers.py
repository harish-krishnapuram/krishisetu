from rest_framework import serializers
from .models import User, FarmerProfile


class FarmerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerProfile
        fields = [
            'farm_name',
            'location',
            'district',
            'state',
            'experience_years',
            'specialties',
            'is_verified',
            'total_sales_quintals',
            'rating',
            'reviews_count',
        ]


class UserSerializer(serializers.ModelSerializer):
    farmer_profile = FarmerProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'role',
            'phone',
            'avatar',
            'address',
            'farmer_profile',
        ]


class RegisterSerializer(serializers.ModelSerializer):
    farm_name = serializers.CharField(
        write_only=True,
        required=False
    )

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
            'role',
            'phone',
            'address',
            'farm_name',
        ]

        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    def create(self, validated_data):

        farm_name = validated_data.pop(
            'farm_name',
            None
        )

        password = validated_data.pop(
            'password'
        )

        user = User(**validated_data)

        user.set_password = password

        user.save()

        if user.role == 'farmer':

            FarmerProfile.objects.create(
                user=user,
                farm_name=farm_name if farm_name else "My Farm",
                location="",
                district="",
            )

        return user


class ProfileSerializer(serializers.ModelSerializer):
    farmer_profile = FarmerProfileSerializer()

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
            'phone',
            'avatar',
            'address',
            'role',
            'farmer_profile',
        ]

    def update(self, instance, validated_data):

        farmer_data = validated_data.pop(
            'farmer_profile',
            None
        )

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        if farmer_data:

            farmer = instance.farmer_profile

            for attr, value in farmer_data.items():
                setattr(farmer, attr, value)

            farmer.save()

        return instance